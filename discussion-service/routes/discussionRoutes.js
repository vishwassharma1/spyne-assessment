const express = require('express');
const router = express.Router();
const discussionController = require('../controllers/discussionController');
const authMiddleware = require('../middleware/auth')

router.post('/', authMiddleware, discussionController.createDiscussion);
router.get('/tag/:tag', discussionController.getDiscussionsByTag);
router.put('/:id', authMiddleware, discussionController.updateDiscussion);
router.delete('/:id', authMiddleware, discussionController.deleteDiscussion);

module.exports = router;
