const proxy = require('http-proxy-middleware');

const envProperties = {
    SF_TARGET: process.env.SF_TARGET
};

const sfProxy = {
    changeOrigin: true,
    target: envProperties.SF_TARGET,
    pathRewrite: {
        '^/kursoversikt/api/sfkurs': '/services/apexrest/Course',
    },
    secure: true,
    xfwd: true,
    logLevel: 'debug',
    onProxyReq: function onProxyReq(proxyReq, req, res) {
        // add custom header to request
        console.log("req", req);
        console.log("proxyReq", proxyReq);
       // proxyReq.setHeader('Authorization', req._token);
    }

};


module.exports = proxy(sfProxy);
