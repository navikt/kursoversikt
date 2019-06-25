import React from 'react';
import './App.less';
import KursListe from "./kursliste/Kursliste";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Kursoversikt
        </p>
      </header>
      <KursListe></KursListe>
    </div>
  );
}

export default App;
