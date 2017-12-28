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
        <h2 className="cryptocurrency-name">{name}</h2>
        <h3 className="cryptocurrency-symbol">{symbol}</h3>
        <h1 className="cryptocurrency-price"><NumberFormat value={price_usd} displayType={'text'} decimalScale={2} fixedDecimalScale={true} thousandSeparator={true} prefix={'$'} /></h1>
        <p className={percent_change_1h > 0 ? 'green' : 'red'}>{percent_change_1h}%</p>
      </div>
    );
  }
}

export default Cryptocurrency;
