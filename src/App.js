import React, { Component } from 'react';
import './App.css';
import Ticker from './components/Ticker.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h2 className="app-title">Cryptocurrency Comparison</h2>
          <p className="app-info">View current cryptocurrency prices (USD). Percentage changes occur each hour.</p>
        </header>
        <Ticker />
        <footer className="app-footer">
          <p className="made-by">By <a href="http://katherinekato.com" title="Katherine Kato" target="_blank" rel="noopener noreferrer">Katherine Kato</a>. Data provided by <a href="https://coinmarketcap.com" title="CoinMarketCap" target="_blank" rel="noopener noreferrer">CoinMarketCap</a>.</p>
        </footer>
      </div>
    );
  }
}

export default App;
