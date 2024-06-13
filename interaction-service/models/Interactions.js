const mongoose = require('mongoose');

const InteractionSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['like', 'follow'],
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    targetId: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'onModel',
        required: true
    },
    onModel: {
        type: String,
        required: true,
        enum: ['User', 'Discussion', 'Comment']
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Interaction', InteractionSchema);
