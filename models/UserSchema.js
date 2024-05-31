const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const UserSchema = new Schema({
    user_id: {
        required: true,
        unique: true,
        type: String,
    },
    user_password: {
        required: true,
        type: String,
    },
    user_nickname: {
        required: true,
        type: String,
    },
    user_email: {
        required: true,
        type: String,
    },

    word_bookmark: [
        {
            ref: 'Word',
            type: Schema.Types.ObjectId,
        },
    ],
    news_bookmark: [
        {
            ref: 'News',
            type: Schema.Types.ObjectId,
        },
    ],
    isKakao: {
        required: true,
        type: Number,
        enum: [0, 1],
    },
    user_profile: {
        type: String,
        default: process.env.DEFAULTIMAGE,
    },
    isAdmin: {
        type: Number,
        required: true,
        enum: [0, 1],
    },
});

// 기본적으로 첫번째인자 + s(소문자)로 생성된다. -> 세번째 인자로 설정한 값이 DB 컬렉션 아래에 스키마명으로 들어가게 된다.
module.exports = mongoose.model('User', UserSchema);
