const proxy = require('http-proxy-middleware');


const envProperties = {
    SF_AUTH_TARGET: process.env.SF_AUTH_TARGET || 'https://login.salesforce.com',
};

const sfAuthProxy = {
    changeOrigin: true,
    target: envProperties.SF_AUTH_TARGET,
    pathRewrite: {
        '^/kursoversikt/api/kursauth': '/services/oauth2/token',
    },
    secure: true,
    xfwd: true,
};



module.exports = proxy(sfAuthProxy);
