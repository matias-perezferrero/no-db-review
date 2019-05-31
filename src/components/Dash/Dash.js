import React from 'react';
import Header from '../Header/Header';
import Form from '../Form/Form';
import List from '../List/List';
import axios from 'axios';
import './Dash.css';

class Dash extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coins: [],
      editing: false,
      currentCoin: {}
    };
  }

  componentDidMount() {
    axios.get('/api/coins').then(res => {
      console.log(res.data);
      this.setState({
        coins: res.data
      });
    });
  }

  createCoin = coin => {
    axios.post('/api/coin', coin).then(res => {
      console.log(res.data);
      this.setState({
        coins: res.data
      });
    });
  };

  deleteCoin = id => {
    axios.delete(`/api/coin/${id}`).then(res => {
      console.log(res.data);
      this.setState({
        coins: res.data
      });
    });
  };

  setEditing = id => {
    let coin = this.state.coins.find(coin => coin.id == id);

    this.setState({
      editing: true,
      currentCoin: coin
    });
  };

  updateCoin = (id, coin) => {
    axios.put(`/api/coin/${id}`, coin).then(res => {
      console.log(res.data);
      this.setState({
        coins: res.data,
        currentCoin: {},
        editing: false
      });
    });
  };

  render() {
    const { coins, currentCoin, editing } = this.state;
    console.log(currentCoin);
    return (
      <div className="dash">
        <Header />

        <div className="container">
          <div className="main-form">
            <Form
              createCoin={this.createCoin}
              currentCoin={currentCoin}
              editing={editing}
              updateCoin={this.updateCoin}
            />
          </div>
          <div className="main-list">
            <List
              coins={coins}
              deleteCoin={this.deleteCoin}
              setEditing={this.setEditing}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Dash;
