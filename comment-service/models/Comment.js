const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    discussionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Discussion',
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Comment', CommentSchema);
