const express = require('express');
const cartCtlr = require('../controllers/cartController');

const router = express.Router();

router.post('/', cartCtlr.addToCart);
router.get('/', cartCtlr.getCart);

module.exports = router