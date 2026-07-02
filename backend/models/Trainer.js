const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true }, // Gym, Yoga, Personal Training
  phone: { type: String, required: true },
  availableSlots: [{ type: String }], // ['06:00 AM - 07:00 AM', '05:00 PM - 06:00 PM']
  status: { type: String, enum: ['Available', 'Busy'], default: 'Available' }
}, { timestamps: true });

module.exports = mongoose.model('Trainer', trainerSchema);