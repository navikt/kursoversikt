
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
        console.log("add custom header to request");
        console.log("sfauthParams", sfauthParams);
           axios.post(sfAuthbaseUrl, null, {params: sfauthParams}).then(response => {
                console.log("responsen", response);
                console.log("response.data", response.data);
                console.log("response.data.access_token", response.data.access_token);
                token = response.data.access_token;
               proxyReq.setHeader('Authorization', `bearer ${token}`)
           }
        ).catch(e =>{
            console.error('Failure!');
            console.error(e.message);
            console.error('error',e);
            console.error(e.response.status);

        });
        if (token) {
            console.error('no token');
            console.error('token', token);
            proxyReq.setHeader('Authorization', `bearer ${token}`)
        }
    },

};


module.exports = proxy(sfProxy);
