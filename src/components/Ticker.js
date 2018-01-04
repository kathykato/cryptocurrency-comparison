import React, { Component } from 'react';
import './Ticker.css';
import Cryptocurrency from './Cryptocurrency';
import axios from 'axios';

class Ticker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
          {
            id: '',
            name: '',
            symbol: '',
            price_usd: '',
            percent_change_1hr: ''
          }
      ],
      loaded: false
    };
  }
  componentDidMount() {
    axios.get('https://api.coinmarketcap.com/v1/ticker/')
      .then(response => {
        const cryptos = ['bitcoin', 'ripple', 'ethereum', 'bitcoin-cash', 'cardano', 'stellar', 'nem', 'litecoin'];
        const result = response.data.filter(currency => cryptos.includes(currency.id));
        this.setState({
          loaded: true,
          data: result
        });
      })
      .catch(error => console.log('Error!'));
  }
  render() {
    var ticker = this.state.data.map((currency) =>
        <Cryptocurrency data={currency} key={currency.id} />
    );
    return this.state.loaded ? (
      <div className="container">
        <div className="ticker-box">{ticker}</div>
      </div>
    )
    : <div className="container">
        <div className="loading-box">
          <p>Loading data...</p>
        </div>
      </div>
  }
}

export default Ticker;
