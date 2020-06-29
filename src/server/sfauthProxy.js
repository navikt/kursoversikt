
const proxy = require('http-proxy-middleware');
const HttpsProxyAgent = require('https-proxy-agent');


const envProperties = {

    PROXY_SERVER: process.env.HTTPS_PROXY,
};

const sfAuthProxy = {
    changeOrigin: true,
    target: 'https://test.salesforce.com',
    pathRewrite: {
        '^/kursoversikt/api/kursauth': '/services/oauth2/token',
    },
    secure: true,
    xfwd: true,
    logLevel: 'debug',
    agent: new HttpsProxyAgent(envProperties.PROXY_SERVER),
};



module.exports = proxy(sfAuthProxy);
