import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import DetaljSide from './detaljside/DetaljSide';
import KursListe from './kursliste/Kursliste';
import './App.less';
import bemHelper from './utils/bemHelper';
import {KursProvider} from "./utils/KursProvider";
import ScrollToTop from "./utils/ScrollToTop";

const cls = bemHelper('app');

const basename = '/kursoversikt';

function App() {
    return (
        <div className={cls.block}>
            <KursProvider>
            <BrowserRouter basename={basename}>
                <ScrollToTop />
                <Routes>
                    <Route path="/:id" element={<DetaljSide />} />
                    <Route path="/" element={<KursListe />} />
                </Routes>
            </BrowserRouter>
            </KursProvider>
        </div>
    );
}

export default App;
