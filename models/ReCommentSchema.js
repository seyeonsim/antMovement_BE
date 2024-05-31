const mongoose = require('mongoose');
const { Schema } = mongoose;

const ReCommentSchema = new Schema({
    // 댓글 id 불러오기
    commentId: {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
        required: true,
    },
    // 유저 id 불러오기
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    content: {
        required: true,
        type: String,
    },
    date: {
        type: String,
        default: Date.now,
    },
});

module.exports = mongoose.model('ReComment', ReCommentSchema);
