import 'core-js';
import 'unorm/lib/unorm';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.less';
import App from './App';
import * as Sentry from "@sentry/browser";


Sentry.init({
    dsn: "https://0d0215555d834fdab7dd2b90d8c5cb38@sentry.gc.nav.no/60",
    environment: window.location.hostname,
});

if (process.env.REACT_APP_MOCK) {
    console.log('========================================');
    console.log('=============== MED MOCK ===============');
    console.log('===DETTE SKAL DU IKKE SE I PRODUKSJON===');
    console.log('========================================');

    require('./mock/SfMock')
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

