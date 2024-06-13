const express = require('express');
const { register, login } = require('../controllers/authController');
const UserController = require('../controllers/userController'); // Import your controller
const router = express.Router();
const authMiddleware = require('../middleware/AUTH')

router.post('/register', register);
router.post('/login', login);
router.get('/profile', authMiddleware, UserController.getProfile);
router.put('/profile', authMiddleware, UserController.updateProfile);
router.delete('/profile', authMiddleware, UserController.deleteProfile);

module.exports = router;
