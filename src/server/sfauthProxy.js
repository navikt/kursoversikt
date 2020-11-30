
const proxy = require('http-proxy-middleware');
const HttpsProxyAgent = require('https-proxy-agent');


const envProperties = {
    SF_AUTH_TARGET: process.env.SF_AUTH_TARGET || 'https://login.salesforce.com',
    PROXY_SERVER: process.env.HTTPS_PROXY,
};

const sfAuthProxy = {
    changeOrigin: true,
    target: envProperties.SF_AUTH_TARGET,
    pathRewrite: {
        '^/kursoversikt/api/kursauth': '/services/oauth2/token',
    },
    secure: true,
    xfwd: true,
    logLevel: 'info',
    agent: new HttpsProxyAgent(envProperties.PROXY_SERVER),
};



module.exports = proxy(sfAuthProxy);
