const express = require('express');
const ctrl = require('./controllers/coin_controller');

const app = express();

// MIDDLEWARE

app.use(express.json());

// ENDPOINTS

app.get('/api/coins', ctrl.getCoins);

app.post('/api/coin', ctrl.addCoin);

app.delete('/api/coin/:id', ctrl.deleteCoin);

app.put('/api/coin/:id', ctrl.updateCoin);

const PORT = 3033;
app.listen(PORT, () => console.log('Listening on port ', PORT));
