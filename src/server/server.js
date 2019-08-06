const path = require('path');
const express = require('express');
const BASE_PATH = '/kursoversikt';
const server = express();
const buildPath = path.join(__dirname, '../../build');

// Ikke bruk proxy hvis du vil mocke API-et.
let pindenaProxyConfig;
if (!process.env.REACT_APP_MOCK) {
    pindenaProxyConfig = require('./pindenaProxyConfig');
}

// security
server.disable('x-powered-by');

// health checks
server.get(BASE_PATH + '/internal/isAlive', (req, res) => res.sendStatus(200));
server.get(BASE_PATH + '/internal/isReady', (req, res) => res.sendStatus(200));

if (pindenaProxyConfig) {
    server.use(BASE_PATH + '/api/kurs', pindenaProxyConfig);
}

server.use(BASE_PATH, express.static(buildPath));

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log('Server listening on port', port);
});
