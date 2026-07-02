const Attendance = require('../models/Attendance');
const Member = require('../models/Member');

// MARK ATTENDANCE VIA QR SCAN
const scanAttendance = async (req, res) => {
  try {
    const { qrCodeData } = req.body;

    // Find member by QR data
    const member = await Member.findOne({ qrCodeData });
    if (!member) {
      return res.json({ success: false, message: 'Invalid QR Code / Member not found! ❌' });
    }

    // Check membership expiration status
    if (member.status === 'Expired') {
      return res.json({ success: false, message: 'Membership expired! Please renew. ⚠️' });
    }

    // Innaiku date-la already attendance pottaacha-nu check panrom
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const alreadyCheckedIn = await Attendance.findOne({
      memberId: member._id,
      date: { $gte: startOfDay, $lte: endOfDay }
    });

    if (alreadyCheckedIn) {
      return res.json({ success: false, message: `Hey ${member.name}, you are already marked Present today! 👍` });
    }

    // Save Attendance record
    const newAttendance = new Attendance({ memberId: member._id });
    await newAttendance.save();

    res.json({
      success: true,
      message: `Welcome ${member.name}! Attendance marked successfully. 💪`,
      member
    });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: 'Server error, bro!', error: error.message });
  }
};

module.exports = { scanAttendance };