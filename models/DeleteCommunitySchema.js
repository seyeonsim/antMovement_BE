const mongoose = require('mongoose');
const { Schema } = mongoose;

const DeleteCommunitySchema = new Schema({
    // id 연결 (ref는 exports 이름)
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    //  커뮤니티 데이터
    title: {
        required: true,
        type: String,
    },
    content: {
        required: true,
        type: String,
    },
    subject: {
        required: true,
        type: String,
        enum: ['free', 'economy', 'stock', 'coin'],
    },
    date: {
        type: String,
        default: Date.now,
    },
    like: {
        type: Number,
        default: 0,
    },
    likedUser: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    image: {
        type: String,
    },
    reportedUser: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
});

module.exports = mongoose.model('DeleteCommunity', DeleteCommunitySchema);
