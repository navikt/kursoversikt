
const proxy = require('http-proxy-middleware');
const HttpsProxyAgent = require('https-proxy-agent');

const envProperties = {

    PROXY_SERVER: process.env.HTTPS_PROXY,
};
const sfProxy = {
    changeOrigin: true,
    target: 'https://test.salesforce.com',
    pathRewrite: {
        '^/kursoversikt/api/kurs': '/services/oauth2/token',
    },
    secure: true,
    xfwd: true,
    logLevel: 'debug',
    agent: new HttpsProxyAgent(envProperties.PROXY_SERVER),
    onProxyReq: function onProxyReq(proxyReq, req, res) {
        // add custom header to request
        console.log("add custom header to request");
        let token = req.authtoken.token;
        if (token) {
            proxyReq.setHeader('Authorization', `bearer ${token.access_token}`)
        }
    },

};


module.exports = proxy(sfProxy);
