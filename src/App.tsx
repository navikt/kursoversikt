import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import DetaljSide from './detaljside/DetaljSide';
import KursListe from './kursliste/Kursliste';
import './App.less';
import bemHelper from './utils/bemHelper';
import {initAmplitude} from "./utils/amplitude";

const cls = bemHelper('app');

const basename = '/kursoversikt';

function App() {
    initAmplitude()
    return (
        <div className={cls.block}>
            <BrowserRouter basename={basename}>
                <Switch>
                    <Route path="/:id" exact={true} component={DetaljSide}/>
                    <Route path="/" exact={true} component={KursListe}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
