const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const NewsSchema = new Schema({
    url: {
        required: true,
        type: String,
    },
    title: {
        required: true,
        type: String,
        unique: true,
    },
    content: {
        required: true,
        type: String,
        unique: true,
    },
    date: {
        type: String,
    },
    views: {
        type: Number,
        required: true,
        default: 0,
    },
    bookmark: {
        type: Number,
        required: true,
        default: 0,
    },
    smallimg: {
        type: String,
    },
    bigimg: {
        type: String,
    },
    // 1 : 주식뉴스
    // 2 : 코인뉴스
    // 3 : 경제뉴스
    group: {
        type: Number,
        required: true,
        default: 0,
    },
    subtitle: {
        type: String,
    },
});

module.exports = mongoose.model('News', NewsSchema);
