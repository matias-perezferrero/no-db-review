import React, { Component } from 'react';
import Coin from '../Coin/Coin';
import './List.css';

export default class List extends Component {
  render() {
    const mappedCoins = this.props.coins.map(coin => {
      return (
        <Coin
          key={coin.id}
          coin={coin}
          deleteCoin={this.props.deleteCoin}
          setEditing={this.props.setEditing}
          id={coin.id}
        />
      );
    });
    return <div className="list-container">{mappedCoins}</div>;
  }
}
