const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    UPC: {
        type: String,
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
});

var itemModel = mongoose.model('item', itemSchema);
module.exports = itemModel;