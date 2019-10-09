import 'core-js';
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable';
import 'unorm/lib/unorm';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.less';
import App from './App';


if (process.env.REACT_APP_MOCK) {
    console.log('========================================');
    console.log('=============== MED MOCK ===============');
    console.log('===DETTE SKAL DU IKKE SE I PRODUKSJON===');
    console.log('========================================');

    require('./mock/PindenaMock');
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

