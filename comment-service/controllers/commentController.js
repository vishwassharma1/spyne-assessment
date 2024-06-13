const Comment = require('../models/Comment');

exports.createComment = async (req, res) => {
    try {
        const { text, discussionId } = req.body;
        const comment = new Comment({
            text,
            userId: req.user.id,
            discussionId
        });
        await comment.save();
        res.status(201).json(comment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { text } = req.body;
        const comment = await Comment.findById(id);
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        if (comment.userId.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Unauthorized' });
        }
        comment.text = text || comment.text;
        await comment.save();
        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = await Comment.findById(id);
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        if (comment.userId.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Unauthorized' });
        }
        await comment.remove();
        res.status(200).json({ message: 'Comment deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
