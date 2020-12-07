
const proxy = require('http-proxy-middleware');
const axios = require('axios');

const envProperties = {
    PROXY_SERVER: process.env.HTTPS_PROXY,
    SF_TARGET: process.env.SF_TARGET
};

const sfAuthbaseUrl= "https://arbeidsgiver-q.nav.no/kursoversikt/api/kursauth";

const sfauthParams = {
    'grant_type':'password',
    'client_id': process.env.SF_CLIENTID,
    'client_secret': process.env.SF_CLIENTSECRET,
    'username': process.env.SF_USER,
    'password': process.env.SF_PASS,
};

let token ="";

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
