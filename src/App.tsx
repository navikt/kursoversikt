import React from 'react';
import './App.less';
import KursListe from "./kursliste/Kursliste";
import {Sidetittel} from "nav-frontend-typografi";

function App() {
  return (
    <div className={"bakgrunnsside"}>
      <header className={"overskrift"}>
            <Sidetittel className={"sentrert__tekst"}>Kurskalender</Sidetittel>
      </header>
      <KursListe></KursListe>
    </div>
  );
}

export default App;
