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
      <div className="media">
        <div className="media-left">
          <i className={'cc ' + symbol} title={symbol}></i>
        </div>
        <div className="media-content">
          <h2 className="cryptocurrency-name">{name}</h2>
          <h3 className="cryptocurrency-symbol">{symbol}</h3>
        </div>
      </div>
        <div className="content">
          <h1 className="cryptocurrency-price"><NumberFormat value={price_usd} displayType={'text'} decimalScale={2} fixedDecimalScale={true} thousandSeparator={true} prefix={'$'} /></h1>
          <p className={percent_change_1h > 0 ? 'green' : 'red'}>{percent_change_1h}%</p>
        </div>
      </div>
    );
  }
}

export default Cryptocurrency;
