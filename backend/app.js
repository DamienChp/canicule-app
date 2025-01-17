const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const swimwearRoutes = require('./routes/swimwearRoute');
const customerRoutes = require('./routes/customerRoute');
const cartRoutes = require('./routes/cartRoute');

mongoose.connect('mongodb+srv://user1:precifield@cluster0.x1rko.mongodb.net/',
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api/swimwear', swimwearRoutes);
app.use('/api/customer', customerRoutes);
app.use('/api/cart', cartRoutes);

module.exports = app;