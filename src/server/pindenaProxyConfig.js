const proxy = require('http-proxy-middleware');

const envProperties = {
    API_USER: process.env.PINDENA_USER,
    API_PASS: process.env.PINDENA_PASS,
};

const pindenaProxyConfig = {
    changeOrigin: true,
    target: 'https://nav.pameldingssystem.no',
    pathRewrite: {
        '^/kursoversikt/api/kurs': '/api/v1.1/activities',
    },
    secure: true,
    xfwd: true,
    logLevel: 'debug',
};

if (envProperties.API_USER) {
    console.log("fant secrets i env ");
    pindenaProxyConfig.auth = envProperties.API_USER + ':' + envProperties.API_PASS;
}

module.exports = proxy(pindenaProxyConfig);
