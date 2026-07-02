const Trainer = require('../models/Trainer');

// Add New Trainer
const addTrainer = async (req, res) => {
  try {
    const { name, specialization, phone, availableSlots } = req.body;
    const newTrainer = new Trainer({ name, specialization, phone, availableSlots });
    await newTrainer.save();
    res.json({ success: true, message: 'Trainer Added Successfully! 🏋️‍♂️', data: newTrainer });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

// Get All Trainers
const listTrainers = async (req, res) => {
  try {
    const trainers = await Trainer.find({});
    res.json({ success: true, data: trainers });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

module.exports = { addTrainer, listTrainers };