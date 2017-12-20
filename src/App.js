import React, { Component } from 'react';
import logo from './estopolis-logo.png';

import './App.css';
import 'react-select/dist/react-select.css';
import ForAdmin from './components/ForAdmin';
import ForWriter from './components/ForWriter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Forms for category, tag, SEO keyword / Estopolis</h1>
        </header>
        <div>
          <ForAdmin />
          <ForWriter />
        </div>
        <footer className="App-footer">
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
