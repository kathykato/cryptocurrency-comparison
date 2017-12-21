import React, { Component } from 'react';
import './App.css';
import Ticker from './components/Ticker.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-title">Cryptocurrency Comparison</h2>
        </header>
        <Ticker />
      </div>
    );
  }
}

export default App;
