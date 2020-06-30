
const proxy = require('http-proxy-middleware');
const HttpsProxyAgent = require('https-proxy-agent');
const axios = require('axios');

const envProperties = {
    PROXY_SERVER: process.env.HTTPS_PROXY,
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
    target: 'https://navdialog--preprod.my.salesforce.com',
    pathRewrite: {
        '^/kursoversikt/api/kurs': '/services/apexrest/Course',
    },
    secure: true,
    xfwd: true,
    logLevel: 'debug',
    agent: new HttpsProxyAgent(envProperties.PROXY_SERVER),
    onProxyReq: function onProxyReq(proxyReq, req, res) {
        // add custom header to request
        proxyReq.setHeader('Authorization', req._token);
        console.log("responsen", proxyReq);
        console.log("req", req);

    }

};


module.exports = proxy(sfProxy);
