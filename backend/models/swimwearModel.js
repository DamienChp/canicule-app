const mongoose = require('mongoose');

const SizeSchema = mongoose.Schema({
    size : { type: String, required: true },
    quantity : { type: Number, required: true }
});

const swimwearSchema = mongoose.Schema({
    gender : { type: String, enum : ['man', 'woman'], required: true },
    type : { type: String, enum : ['one-piece', 'top', 'bottom'], required: true },
    brand : { type: String, required: true },
    model : { type: String, required: true },
    priceHT : { type: Number, required: true },
    priceTTC : { type: Number, required: true },
    barcode : { type: String, required: true },
    sizes : [SizeSchema],
});

module.exports = mongoose.model('Swimwear', swimwearSchema);