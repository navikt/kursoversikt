
const proxy = require('http-proxy-middleware');
const HttpsProxyAgent = require('https-proxy-agent');



const pindenaProxyConfig = {
    changeOrigin: true,
    target: 'https://test.salesforce.com',
    pathRewrite: {
        '^/kursauth': '/services/oauth2/token',
    },
    secure: true,
    xfwd: true,
    logLevel: 'debug',
    agent: new HttpsProxyAgent(envProperties.PROXY_SERVER),
};

if (envProperties.SF_USER) {
    pindenaProxyConfig.auth = envProperties.SF_USER + ':' + envProperties.SF_PASS;
}

module.exports = proxy(pindenaProxyConfig);
