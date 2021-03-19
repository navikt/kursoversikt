import path from 'path';
import fetch from 'node-fetch';
import express from 'express';
import mustacheExpress from 'mustache-express';
import httpProxyMiddleware from "http-proxy-middleware";
import jsdom from "jsdom";
import Prometheus from "prom-client";
import require from "./esm-require.js";

const {createLogger, transports, format} = require('winston');
const apiMetricsMiddleware = require('prometheus-api-metrics');
const {JSDOM} = jsdom;
const {createProxyMiddleware} = httpProxyMiddleware;

const defaultDecoratorUrl = 'https://www.nav.no/dekoratoren/';
const {
    PORT = 3000,
    NAIS_APP_IMAGE = '?',
    NAIS_CLUSTER_NAME = 'local',
    DECORATOR_EXTERNAL_URL = defaultDecoratorUrl,    
    DECORATOR_UPDATE_MS = 30 * 60 * 1000,
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

const decoratorUrl = NAIS_CLUSTER_NAME === 'prod-sbs' ? defaultDecoratorUrl : DECORATOR_EXTERNAL_URL;
const BUILD_PATH = path.join(process.cwd(), '../build');
const getDecoratorFragments = async () => {
    const response = await fetch(decoratorUrl);
    const body = await response.text();
    const {document} = new JSDOM(body).window;
    return {
        HEADER: document.getElementById('header-withmenu').innerHTML,
        FOOTER: document.getElementById('footer-withmenu').innerHTML,
        STYLES: document.getElementById('styles').innerHTML,
        SCRIPTS: document.getElementById('scripts').innerHTML,
        SETTINGS: `<script type="application/javascript">
            window.appSettings = {
                MILJO: '${NAIS_CLUSTER_NAME}',
            }
        </script>`,
    };
}

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
app.use('/kursoversikt/api/sfkurs', async (req, res, next) => {
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
        const { access_token: token } = await response.json();
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
app.use('/kursoversikt/api/sfkurs', createProxyMiddleware({
    logLevel: PROXY_LOG_LEVEL,
    logProvider: _ => log,
    onError: (err, req, res) => {
        log.error(`${req.method} ${req.path} => [${res.statusCode}:${res.statusText}]: ${err.message}`);
    },
    changeOrigin: true,
    target: SF_TARGET,
    pathRewrite: {
        '^/kursoversikt/api/sfkurs': '/services/apexrest/Course',
    },
    secure: true,
    xfwd: true,
    onProxyReq: (proxyReq, req, res) => {
        log.info("sf proxy proxyReq target: ", proxyReq.target);
    },
    onProxyRes: (proxyRes, req, res) => {
        sf_api_status_gauge.set(res.statusCode >= 200 && res.statusCode < 400 ? 1 : 0);
    }
}));
app.use('/kursoversikt', express.static(BUILD_PATH, {index: false}));

app.get('/kursoversikt/internal/isAlive', (req, res) => res.sendStatus(200));
app.get('/kursoversikt/internal/isReady', (req, res) => res.sendStatus(200));

const serve = async () => {
    let fragments;
    try {
        fragments = await getDecoratorFragments();
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
            log.info('Server listening on port ', PORT);
        });
    } catch (error) {
        log.error('Server failed to start ', error);
        process.exit(1);
    }

    setInterval(() => {
        getDecoratorFragments()
            .then(oppdatert => {
                fragments = oppdatert;
                log.info(`dekoratør oppdatert: ${Object.keys(oppdatert)}`);
            })
            .catch(error => {
                log.warn(`oppdatering av dekoratør feilet: ${error}`);
            });
    }, DECORATOR_UPDATE_MS);
}

serve().then(/*noop*/);
