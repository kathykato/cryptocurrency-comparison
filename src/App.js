import React, { Component } from 'react';
import './App.css';
import Ticker from './components/Ticker.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-title">Cryptocurrency Comparison</h2>
          <a href="">Refresh</a>
        </header>
        <Ticker />
        <footer className="App-footer">
          <p className="name">By <a href="http://katherinekato.com" title="Katherine Kato" target="_blank" rel="noopener noreferrer">Katherine Kato</a>. Data provided by Coinmarketcap.</p>
        </footer>
      </div>
    );
  }
}

export default App;
