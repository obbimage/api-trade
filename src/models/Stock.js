const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    close: {
        type: Number
    },
    date: {
        type: Date
    },
    hight: {
        type: Number
    },
    low: {
        type: Number
    },
    open: {
        type: Number
    },
    ticker: {
        type: String
    },
    vol: {
        type: String
    }
});

const stockModel = mongoose.model('stocks', stockSchema);

module.exports = { stockSchema, stockModel };