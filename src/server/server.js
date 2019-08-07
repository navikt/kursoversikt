const path = require('path');
const express = require('express');

const { PORT, REACT_APP_MOCK } = process.env;

const BASE_PATH = '/kursoversikt';
const buildPath = path.join(__dirname, '../../build');
const port = PORT || 3000;

const server = express();

const startServer = () => {
    let pindenaProxyConfig;

    // Sikkerhet
    server.disable('x-powered-by');

    // Helsesjekker for NAIS
    server.get(BASE_PATH + '/internal/isAlive', (req, res) => res.sendStatus(200));
    server.get(BASE_PATH + '/internal/isReady', (req, res) => res.sendStatus(200));

    // Ikke bruk proxy hvis du vil mocke API-et.
    if (!REACT_APP_MOCK) {
        pindenaProxyConfig = require('./pindenaProxyConfig');
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

startServer();
