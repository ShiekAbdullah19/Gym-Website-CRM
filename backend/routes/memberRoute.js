const express = require('express');
const router = express.Router();
const Member = require('../models/Member');

// 1. ADD NEW MEMBER (POST -> http://localhost:5000/api/members/add)
router.post('/add', async (req, res) => {
  try {
    const { name, email, phone, planType, months } = req.body;

    // Email already exist-ah nu check panrom
    const existingMember = await Member.findOne({ email });
    if (existingMember) {
      return res.status(400).json({ message: 'Email already registered, bro!' });
    }

    // Next renewal date calculate panrom (Current date + plan months)
    let renewalDate = new Date();
    renewalDate.setMonth(renewalDate.getMonth() + parseInt(months || 1));

    // Unique QR Code ID create panrom (Simulating unique string)
    const qrCodeData = `GYM-${Math.floor(100000 + Math.random() * 900000)}`;

    const newMember = new Member({
      name,
      email,
      phone,
      planType,
      nextRenewalDate: renewalDate,
      qrCodeData
    });

    await newMember.save();
    res.status(201).json({ message: 'Member added successfully, bro! 🎉', member: newMember });
  } catch (error) {
    res.status(500).json({ message: 'Server error, bro!', error: error.message });
  }
});

// 2. GET ALL MEMBERS (GET -> http://localhost:5000/api/members)
router.get('/', async (req, res) => {
  try {
    const members = await Member.find().sort({ createdAt: -1 });
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ message: 'Server error, bro!', error: error.message });
  }
});

module.exports = router;