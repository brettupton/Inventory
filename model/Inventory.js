const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    UPC: {
        type: Number,
        required: true
    },
    MPN: {
        type: String,
        required: true
    },
    Quantity: {
        type: Number,
        default: 0
    },
    Image: {
        type: String,
    },
    Category: {
        type: String,
    },
    IndividualSold: {
        type: Number,
    },
    InstitutionalSold: {
        type: Number,
    },
    IndividualReturned: {
        type: Number,
    },
    InstitutionalReturned: {
        type: Number,
    },
    IndividualPromotion: {
        type: Number,
    },
    InstitutionalPromotion: {
        type: Number,
    }
});

const itemModel = mongoose.model('item', itemSchema);
module.exports = itemModel;