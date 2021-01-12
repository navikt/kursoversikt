const path = require('path');
const express = require('express');
const axios = require('axios');
const server = express();
const mustacheExpress = require('mustache-express');
const getDecorator = require('./decorator');
const Promise = require('promise');
const { PORT, REACT_APP_MOCK } = process.env;
const sfProxy = require('./sfProxy');
const BASE_PATH = '/kursoversikt';
const buildPath = path.join(__dirname, '../../build');
const port = PORT || 3000;

server.engine('html', mustacheExpress());
server.set('view engine', 'mustache');
server.set('views', buildPath);

let token ="";


const sfAuthUrl= process.env.SF_AUTH_URL||"https://login.salesforce.com/services/oauth2/token";

const sfauthParams = {
    'grant_type':'password',
    'client_id': process.env.SF_CLIENTID,
    'client_secret': process.env.SF_CLIENTSECRET,
    'username': process.env.SF_USER,
    'password': process.env.SF_PASS,
};

const renderApp = decoratorFragments =>
    new Promise((resolve, reject) => {
        server.render('index.html', decoratorFragments, (err, html) => {
            if (err) {
                reject(err);
            } else {
                resolve(html);
            }
        });
    });

const startServer = html => {
    // Sikkerhet
    server.disable('x-powered-by');
    // Helsesjekker for NAIS
    server.get(BASE_PATH + '/internal/isAlive', (req, res) => res.sendStatus(200));
    server.get(BASE_PATH + '/internal/isReady', (req, res) => res.sendStatus(200));
    if (!REACT_APP_MOCK) {
        server.use(BASE_PATH + '/api/sfkurs', async (req, res, next) => {
            axios.post(sfAuthUrl, null, {params: sfauthParams}).then(response => {
                    token = response.data.access_token;
                    req.headers["Authorization"] = `Bearer ${token}`;
                    next();
                }
            ).catch(e =>{
                console.error('Failure!');
                console.error(e.message);
                console.error('error',e);
                console.error(e.response.status);
                res.sendStatus(500);
                next();
            });
        });
        server.use(BASE_PATH + '/api/sfkurs', sfProxy);
    }

    server.use(BASE_PATH, express.static(buildPath, { index: false }));
    server.get(`${BASE_PATH}/*`, (req, res) => {
        res.send(html);
    });
    server.listen(port, () => {
        console.log('Server listening on port', port);
    });
};

getDecorator()
    .then(renderApp, error => {
        console.error('Kunne ikke hente dekoratør ', error);
        process.exit(1);
    })
    .then(startServer, error => {
        console.error('Kunne ikke rendre app ', error);
        process.exit(1);
    });
