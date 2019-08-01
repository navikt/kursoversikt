import React from 'react';
import './App.less';
import KursListe from "./kursliste/Kursliste";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetaljSide from "./detaljside/DetaljSide";
const basename = "/kursoversikt";
function App() {
  return (
      <div className={"bakgrunnsside"}>
      <BrowserRouter basename={basename}>
      <Switch>
          <Route
              path="/:orgnummer"
              exact={true}
              component={DetaljSide}
          />
          <Route
              path="/"
              exact={true}
              component={KursListe}
          />
      </Switch>
       </BrowserRouter>
      </div>
  );
}

export default App;
