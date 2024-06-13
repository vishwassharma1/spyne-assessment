const mongoose = require('mongoose');

const DiscussionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    hashtags: [{
        type: String
    }],
    createdOn: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Discussion', DiscussionSchema);
