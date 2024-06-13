const express = require('express');
const router = express.Router();
const interactionController = require('../controllers/interactionController');
const authMiddleware = require('../middleware/auth')


router.post('/', authMiddleware, interactionController.createInteraction);
router.get('/', authMiddleware, interactionController.getInteractions);
router.delete('/:id', authMiddleware, interactionController.deleteInteraction);

module.exports = router;
