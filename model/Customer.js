const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: {
        type: String,
    },
    date: {
        type: Date,
    },
    contactInfo: {
        type: String,
    },
    address: {
        type: String,
    },
    transactionType: {
        // if true, personal 
        type: Boolean,
        default: false
    },
    bannerIndex: {
        type: Number,
    },
    poNumber: {
        type: Number,
    },
    itemsOrdered: {
        type: String,
    },
    applecare: {
        type: Boolean,
        default: false
    },
    registerTransaction: {
        type: Number,
    },
    estimatedDelivery: {
        type: String,
    },
    additionalNotes: {
        type: String,
    }
});

const customerModel = mongoose.model('customer', customerSchema);
module.exports = customerModel;