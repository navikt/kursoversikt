import path from 'path';
import fetch from 'node-fetch';
import express from 'express';
import mustacheExpress from 'mustache-express';
import {createLogger, transports, format} from 'winston';
import Prometheus from "prom-client";

import require from "./esm-require.js";
const apiMetricsMiddleware = require('prometheus-api-metrics');

const {
    PORT = 3000,
    NAIS_APP_IMAGE = '?',
    GIT_COMMIT = '?',
    NAIS_CLUSTER_NAME = 'local',
    SF_TARGET = 'http://localhost:8080',
    SF_AUTH_URL = "https://login.salesforce.com/services/oauth2/token",
    SF_CLIENTID,
    SF_CLIENTSECRET,
    SF_USER,
    SF_PASS,
} = process.env;

const log = createLogger({
    transports: [
        new transports.Console({
            timestamp: true,
            format: format.json()
        })
    ]
});


const sf_api_status_gauge = new Prometheus.Gauge({
    name: 'sf_api_status',
    help: 'Status til sf api. up=1, down=0',
});

const kurskatalog_call_counter = new Prometheus.Counter({
    name: 'fetch_kurskatalog_counter',
    help: 'counter for henting av kurskalenderen fra salesforce til server-cache',
    labelNames: ['outcome'],
})
const kurskatalog_call_counter_failure = kurskatalog_call_counter.labels('failure')
const kurskatalog_call_counter_success = kurskatalog_call_counter.labels('success')

/* Tidligere versjon, som hentet token og kursliste fra salesforce på hvert kall brukte
 * 2 sekunder. Så vi cacher, for å gi brukere kurskalenderen øyeblikkelig.
 */
let kurskatalog = null

const updateKurskatalogAsync = async () => {
    const tokenResponse = await fetch(SF_AUTH_URL, {
        method: 'post',
        body: new URLSearchParams({
            'grant_type': 'password',
            'client_id': SF_CLIENTID,
            'client_secret': SF_CLIENTSECRET,
            'username': SF_USER,
            'password': SF_PASS,
        }),
    });

    if (!tokenResponse.ok) {
        throw Error(`fetch token response not ok. http status: ${tokenResponse.status}`)
    }

    const {access_token: token} = await tokenResponse.json();
    if (typeof token !== 'string') {
        throw Error("token not a string")
    }

    const response = await fetch(`${SF_TARGET}/services/apexrest/Course`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })

    if (!response.ok) {
        throw Error(`response not ok. http status ${response.status}`)
    }

    const body = await response.json()
    if (!Array.isArray('array')) {
        throw Error("response.body not array")
    }
    kurskatalog_call_counter_success.inc()
    sf_api_status_gauge.set(1)
    log.info("updateKurskatalogAsync successfully fetched")
    kurskatalog = body
}

const updateKurskatalog = ({reportFailure = true} = { reportFailure: true}) => {
    updateKurskatalogAsync()
        .then()
        .catch(error => {
            if (reportFailure) {
                kurskatalog_call_counter_failure.inc()
                sf_api_status_gauge.set(0)
                log.error(`updateKurskatalog ${error.message}`)
            }
        })
}

/* Might take some time before container has network access (linkrd (or whatever) sidecar  must start up).
 * So start a fast-pulling for initial loading.
 **/
const setupTimer = setInterval(() => {
    updateKurskatalog({reportFailure: true})
    if (kurskatalog !== null) {
        clearInterval(setupTimer)
    }
}, 500)

/* This timer is slower and never cancled. */
setInterval(updateKurskatalog, 10 * /* min */ 60 * /* s */ 1000 /* ms */)

const BUILD_PATH = path.join(process.cwd(), '../build');

const app = express();
app.disable("x-powered-by");
app.engine('html', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', BUILD_PATH);

app.use('/*', (req, res, next) => {
    res.setHeader('NAIS_APP_IMAGE', NAIS_APP_IMAGE);
    next();
});

app.use(
    apiMetricsMiddleware({
        metricsPath: '/kursoversikt/internal/metrics',
    })
);

/**
 * obs: dette apiet benyttes også av andre (e.g. team-ia)
 */
app.get('/kursoversikt/api/kurs', async (req, res ) => {
    res.json(kurskatalog ?? [])
});

app.use('/kursoversikt', express.static(BUILD_PATH, {index: false}));

app.get('/kursoversikt/internal/isAlive', (req, res) => {
    res.sendStatus(200)
});
app.get('/kursoversikt/internal/isReady', (req, res) => {
    res.sendStatus(kurskatalog === null ? 500 : 200)
});

const fragments = {
    SETTINGS:
`<script type="application/javascript">
    window.environment = {
        MILJO: '${NAIS_CLUSTER_NAME}',
        GIT_COMMIT: '${GIT_COMMIT}',
    }
</script>`,
}

app.get('/kursoversikt/*', (req, res) => {
    res.render('index.html', fragments, (err, html) => {
        if (err) {
            log.error(err);
            res.sendStatus(500);
        } else {
            res.send(html);
        }
    });
});

const serve = async () => {
    try {
        app.listen(PORT, () => {
            log.info('Server listening on port ', PORT);
        });
    } catch (error) {
        log.error('Server failed to start ', error);
        process.exit(1);
    }
}

serve().then(/*noop*/);
