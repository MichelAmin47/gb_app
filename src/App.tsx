import React from 'react';
import logo from './air-jordan-logo.png';
import {quickSearch} from './gb_searcher'
import './App.css';

function clickMe() {
  alert(quickSearch());
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://open.spotify.com/episode/3QZvw06TYKqnGL7KDj1FwU"
          target="_blank"
          rel="noopener noreferrer"
        >
          Classic Giant Bombcast lister coming soon!
        </a>
        <button onClick={clickMe}>Button</button>
      </header>
    </div>
  );
}

export default App;
