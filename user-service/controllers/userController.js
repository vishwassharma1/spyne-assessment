// userController.js

const User = require('../models/User'); // Assuming you have a User model defined

// GET /profile
const getProfile = async (req, res) => {
    try {
        // Fetch user profile based on req.user
        const userId = req.user.userId; // Assuming your JWT payload includes userId
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ user });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// PUT /profile
const updateProfile = async (req, res) => {
    try {
        // Update user profile based on req.user
        const userId = req.user.userId; // Assuming your JWT payload includes userId
        const updatedFields = req.body; // Assuming you're sending updated fields in the request body
        const updatedUser = await User.findByIdAndUpdate(userId, updatedFields, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'Profile updated successfully', user: updatedUser });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// DELETE /profile
const deleteProfile = async (req, res) => {
    try {
        // Delete user profile based on req.user
        const userId = req.user.userId; // Assuming your JWT payload includes userId
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'Profile deleted successfully', deletedUser });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

module.exports = {
    getProfile,
    updateProfile,
    deleteProfile
};
