const Discussion = require('../models/discussion');

exports.createDiscussion = async (req, res) => {
    try {
        const { text, image, hashtags } = req.body;
        const discussion = new Discussion({
            text,
            image,
            hashtags,
            userId: req.user.id
        });
        await discussion.save();
        res.status(201).json(discussion);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getDiscussionsByTag = async (req, res) => {
    try {
        const { tag } = req.params;
        const discussions = await Discussion.find({ hashtags: tag });
        res.status(200).json(discussions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateDiscussion = async (req, res) => {
    try {
        const { id } = req.params;
        const { text, image, hashtags } = req.body;
        const discussion = await Discussion.findById(id);
        if (!discussion) {
            return res.status(404).json({ message: 'Discussion not found' });
        }
        if (discussion.userId.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Unauthorized' });
        }
        discussion.text = text || discussion.text;
        discussion.image = image || discussion.image;
        discussion.hashtags = hashtags || discussion.hashtags;
        await discussion.save();
        res.status(200).json(discussion);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteDiscussion = async (req, res) => {
    try {
        const { id } = req.params;
        const discussion = await Discussion.findById(id);
        if (!discussion) {
            return res.status(404).json({ message: 'Discussion not found' });
        }
        if (discussion.userId.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Unauthorized' });
        }
        await discussion.remove();
        res.status(200).json({ message: 'Discussion deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
