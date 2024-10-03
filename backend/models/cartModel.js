const mongoose = require('mongoose');

const CartItemSchema = mongoose.Schema({
    swimwear: { type: mongoose.Schema.Types.ObjectId, ref: 'Swimwear', required: true },
    quantity: { type: Number, required: true }
});

const cartSchema = mongoose.Schema({
    customer : { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: false },
    items : [CartItemSchema],
    isAnonymous: { type: Boolean, default: true }
});

module.exports = mongoose.model('Cart', cartSchema);