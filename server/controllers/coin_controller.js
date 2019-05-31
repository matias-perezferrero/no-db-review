let id = 2;
let coins = [
  {
    id: 0,
    name: 'Bitcoin',
    price: 8000,
    image: 'https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png'
  },
  {
    id: 1,
    name: 'Ethereum',
    price: 3500,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/256px-Ethereum_logo_2014.svg.png'
  }
];

module.exports = {
  getCoins: (req, res) => {
    res.status(200).send(coins);
  },

  addCoin: (req, res) => {
    const { name, price, image } = req.body;

    let newCoin = {
      id: id++,
      name,
      price,
      image
    };

    coins.push(newCoin);

    res.status(200).send(coins);
  },

  deleteCoin: (req, res) => {
    const { id } = req.params;

    let index = coins.findIndex(coin => coin.id == id);

    coins.splice(index, 1);

    res.status(200).send(coins);
  },

  updateCoin: (req, res) => {
    const { id } = req.params;
    const { name, price, image } = req.body;

    let coin = coins.find(coin => coin.id == id);
    let index = coins.findIndex(coin => coin.id == id);

    let newCoin = {
      id: coin.id,
      name: name || coin.name,
      price: price || coin.price,
      image: image || coin.image
    };

    coins[index] = newCoin;

    res.status(200).send(coins);
  }
};
