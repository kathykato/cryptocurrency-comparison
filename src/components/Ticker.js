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
      ]
    };
  }
  componentDidMount() {
    axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=7')
      .then(response => {
        const cryptos = ['bitcoin', 'ethereum', 'litecoin','bitcoin-cash', 'ripple', 'iota'];
        const result = response.data.filter(currency => cryptos.includes(currency.id));
        this.setState({ data: result});
      })
      .catch(error => console.log('Error!'));
  }
  render() {
    var ticker = this.state.data.map((currency) =>
        <Cryptocurrency data={currency} key={currency.id} />
    );
    return (
      <div className="container">
        <div className="ticker-box">{ticker}</div>
      </div>
    );
  }
}

export default Ticker;
