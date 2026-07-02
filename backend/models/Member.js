const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  joiningDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['Active', 'Expired', 'Pending'], default: 'Active' },
  planType: { type: String, required: true }, // Monthly, Quarterly, Yearly
  nextRenewalDate: { type: Date, required: true },
  qrCodeData: { type: String } // Attendance scan பண்றதுக்கு தனி unique ID
}, { timestamps: true });

module.exports = mongoose.model('Member', memberSchema);