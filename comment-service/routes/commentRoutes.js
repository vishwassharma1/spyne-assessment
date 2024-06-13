const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const authMiddleware = require('../middleware/auth')

router.post('/', authMiddleware, commentController.createComment);
router.put('/:id', authMiddleware, commentController.updateComment);
router.delete('/:id', authMiddleware, commentController.deleteComment);

module.exports = router;
