import React, { Component } from 'react';
import './Cryptocurrency.css';
import NumberFormat from 'react-number-format';

class Cryptocurrency extends Component {
  render() {
    const {
      id,
      name,
      symbol,
      price_usd,
      percent_change_1h,
    } = this.props.data;

    return (
      <div className={'cryptocurrency ' + id}>
      <div className="coin">
        <div className="coin-left">
          <img src={'http://katherinekato.com/misc/svg/' + symbol + '.svg'} alt={symbol} />
        </div>
        <div className="coin-content">
          <h3 className="cryptocurrency-name">{name}</h3>
          <h4 className="cryptocurrency-symbol">{symbol}</h4>
          <h1 className="cryptocurrency-price"><NumberFormat value={price_usd} displayType={'text'} decimalScale={2} fixedDecimalScale={true} thousandSeparator={true} prefix={'$'} /></h1>
          <h3 className={percent_change_1h > 0 ? 'green' : 'red'}>{percent_change_1h}%</h3>
        </div>
      </div>
      </div>
    );
  }
}

export default Cryptocurrency;
