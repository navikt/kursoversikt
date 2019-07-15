const proxy = require('http-proxy-middleware');
const HttpsProxyAgent = require('https-proxy-agent');

const envProperties = {
    API_USER: process.env.PINDENA_USER,
    API_PASS: process.env.PINDENA_PASS,
    PROXY_SERVER: process.env.HTTPS_PROXY
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
    agent: new HttpsProxyAgent(envProperties.PROXY_SERVER)
};

if (envProperties.API_USER) {
    pindenaProxyConfig.auth =envProperties.API_USER + ":" +  envProperties.API_PASS;
}

module.exports = proxy(pindenaProxyConfig);
