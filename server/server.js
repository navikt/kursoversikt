import path from 'path';
import fetch from 'node-fetch';
import express from 'express';
import mustacheExpress from 'mustache-express';
import httpProxyMiddleware from "http-proxy-middleware";
import {createLogger, transports, format} from 'winston';
import Prometheus from "prom-client";

import require from "./esm-require.js";
const apiMetricsMiddleware = require('prometheus-api-metrics');
const {createProxyMiddleware} = httpProxyMiddleware;

const {
    PORT = 3000,
    NAIS_APP_IMAGE = '?',
    GIT_COMMIT = '?',
    NAIS_CLUSTER_NAME = 'local',
    PROXY_LOG_LEVEL = 'info',
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

const BUILD_PATH = path.join(process.cwd(), '../build');

const app = express();
app.disable("x-powered-by");
app.engine('html', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', BUILD_PATH);

const sf_api_status_gauge = new Prometheus.Gauge({
    name: 'sf_api_status',
    help: 'Status til sf api. up=1, down=0',
});

app.use('/*', (req, res, next) => {
    res.setHeader('NAIS_APP_IMAGE', NAIS_APP_IMAGE);
    next();
});
app.use(
    apiMetricsMiddleware({
        metricsPath: '/kursoversikt/internal/metrics',
    })
);

if (process.env.MOCK) {
    log.warn(
`========================================
=============== MED MOCK ===============
===DETTE SKAL DU IKKE SE I PRODUKSJON===
========================================`)

    let kursliste = []
    import('./mock_kursliste.js').then(k => {
        kursliste = k.default
        log.info(`kursliste: ${kursliste.length} elementer`)
    });
    app.use('/kursoversikt/api/kurs', async (req, res) => {
        res.json(kursliste)
    })
} else {
    /**
     * obs: dette apiet benyttes også av andre (e.g. team-ia)
     */
    app.use('/kursoversikt/api/kurs', async (req, res, next) => {
        try {
            const response = await fetch(SF_AUTH_URL, {
                method: 'post',
                body: new URLSearchParams({
                    'grant_type': 'password',
                    'client_id': SF_CLIENTID,
                    'client_secret': SF_CLIENTSECRET,
                    'username': SF_USER,
                    'password': SF_PASS,
                }),
            });
            const {access_token: token} = await response.json();
            req.headers["Authorization"] = `Bearer ${token}`;
            next();
        } catch (e) {
            sf_api_status_gauge.set(0);
            log.error('Failure!');
            log.error(e.message);
            log.error('error', e);
            log.error(e.response.status);
            res.sendStatus(500);
        }
    });
    app.use('/kursoversikt/api/kurs', createProxyMiddleware({
        logLevel: PROXY_LOG_LEVEL,
        logProvider: _ => log,
        onError: (err, req, res) => {
            log.error(`${req.method} ${req.path} => [${res.statusCode}:${res.statusText}]: ${err.message}`);
        },
        changeOrigin: true,
        target: SF_TARGET,
        pathRewrite: {
            '^/kursoversikt/api/kurs': '/services/apexrest/Course',
        },
        secure: true,
        xfwd: true,
        onProxyReq: (proxyReq, _req, _res) => {
            log.info("sf proxy proxyReq target: ", proxyReq.target);
        },
        onProxyRes: (proxyRes, req, res) => {
            sf_api_status_gauge.set(res.statusCode >= 200 && res.statusCode < 400 ? 1 : 0);
        }
    }));

}


app.use('/kursoversikt', express.static(BUILD_PATH, {index: false}));

app.get('/kursoversikt/internal/isAlive', (req, res) => res.sendStatus(200));
app.get('/kursoversikt/internal/isReady', (req, res) => res.sendStatus(200));

const fragments = {
    SETTINGS:
`<script type="application/javascript">
    window.environment = {
        MILJO: '${NAIS_CLUSTER_NAME}',
        GIT_COMMIT: '${GIT_COMMIT}',
    }
</script>`,
}

const serve = async () => {
    try {
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
        app.listen(PORT, () => {
            log.info(`Server listening on port ${PORT}`);
        });
    } catch (error) {
        log.error('Server failed to start ', error);
        process.exit(1);
    }
}

serve().then(/*noop*/);
