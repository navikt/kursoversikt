const path = require('path');
const express = require('express');
const mustacheExpress = require('mustache-express');
const getDecorator = require('./decorator');
const { PORT, REACT_APP_MOCK } = process.env;

const BASE_PATH = '/kursoversikt';
const buildPath = path.join(__dirname, '../../build');
const port = PORT || 3000;

const server = express();

server.engine('html', mustacheExpress());
server.set('view engine', 'mustache');
server.set('views', buildPath);

const renderApp = decoratorFragments =>
    new Promise((resolve, reject) => {
        server.render('index.html', decoratorFragments, (err, html) => {
            if (err) {
                reject(err);
            } else {
                resolve(html);
            }
        });
    });

const startServer = html => {
    // Sikkerhet
    server.disable('x-powered-by');

    // Helsesjekker for NAIS
    setInternalEndpoints();

    // Ikke bruk proxy hvis du vil mocke API-et.
    if (!REACT_APP_MOCK) {
        const pindenaProxyConfig = require('./pindenaProxyConfig');
        server.use(BASE_PATH + '/api/kurs', pindenaProxyConfig);
    }

    server.use(BASE_PATH, express.static(buildPath, { index: false }));
    server.get(`${BASE_PATH}/*`, (req, res) => {
        res.send(html);
    });
    server.listen(port, () => {
        console.log('Server listening on port', port);
    });
};

const startMockServer = () => {
    setInternalEndpoints();

    // Ikke bruk proxy hvis du vil mocke API-et.
    if (!REACT_APP_MOCK) {
        const pindenaProxyConfig = require('./pindenaProxyConfig');
        server.use(BASE_PATH + '/api/kurs', pindenaProxyConfig);
    }

    server.use(BASE_PATH, express.static(buildPath));
    server.use(BASE_PATH, (_, res) => {
        res.sendFile(path.resolve(buildPath, 'index.html'));
    });

    server.listen(port, () => {
        console.log('Server listening on port', port);
    });
};
const setInternalEndpoints = () => {
    server.get(BASE_PATH + '/internal/isAlive', (req, res) => res.sendStatus(200));
    server.get(BASE_PATH + '/internal/isReady', (req, res) => res.sendStatus(200));
};
if (process.env.REACT_APP_MOCK) {
    startMockServer();
} else {
    getDecorator()
        .then(renderApp, error => {
            console.error('Kunne ikke hente dekoratør ', error);
            process.exit(1);
        })
        .then(startServer(), error => {
            console.error('Kunne ikke rendre app ', error);
            process.exit(1);
        });
}
