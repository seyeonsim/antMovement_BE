const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const MyHighlight = new Schema({
    user_id: {
        type: String,
        required: true,
    },
    highlight: [
        {
            news_id: {
                type: String,
                required: true,
            },
            word: { type: [String], required: true },
        },
    ],
});

module.exports = mongoose.model('MyHighlight', MyHighlight);
