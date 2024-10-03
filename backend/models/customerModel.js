const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    first_name : { type: String, required: true },
    last_name : { type: String, required: true },
    email : { type: String, required: true },
    phone : { type: String, required: true },
    address : { type: String, required: true },
    city : { type: String, required: true },
    zip_code : { type: String, required: true },
    country : { type: String, required: true },
});

module.exports = mongoose.model('Customer', customerSchema);