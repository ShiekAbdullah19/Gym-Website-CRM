// backend/controllers/memberController.js
const Member = require('../models/Member');

// 1. ADD NEW GYM MEMBER (POST)
const addMember = async (req, res) => {
  try {
    const { name, email, phone, planType, months } = req.body;

    // Check if member already exists
    const memberExists = await Member.findOne({ email });
    if (memberExists) {
      return res.json({ success: false, message: 'Member with this email already exists! ⚠️' });
    }
    
    // Automatically calculate Next Renewal Date based on registration months
    const nextRenewalDate = new Date();
    nextRenewalDate.setMonth(nextRenewalDate.getMonth() + parseInt(months || 1));

    // Generate a unique random QR code string for identity scanning
    const qrCodeData = `GYM-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;

    const newMember = new Member({
      name,
      email,
      phone,
      planType,
      nextRenewalDate,
      qrCodeData
    });

    await newMember.save();
    res.json({ success: true, message: 'Member Registered Successfully! 🏋️‍♂️', data: newMember });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: 'Server error while adding member', error: err.message });
  }
};

// 2. GET ALL MEMBERS LIST (GET)
const listMembers = async (req, res) => {
  try {
    const members = await Member.find({}).sort({ createdAt: -1 });
    res.json({ success: true, data: members });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: 'Server error while fetching members', error: err.message });
  }
};

module.exports = { addMember, listMembers };