const Interaction = require('../models/Interactions');

exports.createInteraction = async (req, res) => {
    try {
        const { type, targetId, onModel } = req.body;
        const interaction = new Interaction({
            type,
            userId: req.user.id,
            targetId,
            onModel
        });
        await interaction.save();
        res.status(201).json(interaction);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getInteractions = async (req, res) => {
    try {
        const interactions = await Interaction.find({ userId: req.user.id });
        res.status(200).json(interactions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteInteraction = async (req, res) => {
    try {
        const { id } = req.params;
        const interaction = await Interaction.findById(id);
        if (!interaction) {
            return res.status(404).json({ message: 'Interaction not found' });
        }
        if (interaction.userId.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Unauthorized' });
        }
        await interaction.remove();
        res.status(200).json({ message: 'Interaction deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
