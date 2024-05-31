const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const StockWordSchema = new Schema({
    eng_word: {
        required: true,
        type: String,
    },
    kor_word: {
        required: true,
        type: String,
    },
    explanation: {
        required: true,
        type: String,
    },
});

module.exports = mongoose.model('StockWord', StockWordSchema);
