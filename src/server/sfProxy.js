
const proxy = require('http-proxy-middleware');
const HttpsProxyAgent = require('https-proxy-agent');
const axios = require('axios');

const envProperties = {

    PROXY_SERVER: process.env.HTTPS_PROXY,
};

const sfAuthbaseUrl= "https://test.salesforce.com/services/oauth2/token";

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

           axios.post(sfAuthbaseUrl, null, {params: sfauthParams}).then(response => {
                console.log("resToken", response);
                console.log("req.authtoken.token", response.access_token);
        token = response.access_token;}
        ).catch(e =>{
            console.error('Failure!');
            console.error(e.message);
            console.error(e.response.status);

        });
        if (token) {
            proxyReq.setHeader('Authorization', `bearer ${token.access_token}`)
        }
    },

};


module.exports = proxy(sfProxy);
