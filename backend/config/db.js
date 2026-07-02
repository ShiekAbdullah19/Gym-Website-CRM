// backend/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Database Connect ஆனதும் நமக்கு டெர்மினல்ல இந்த மெசேஜ் காட்டும்
    mongoose.connection.on('connected', () => {
      console.log("⚡ MongoDB Database Connected Successfully, Bro!");
    });
    
    // `.env` ஃபைல்ல இருக்குற MONGO_URI வச்சு கனெக்ட் பண்ணுது
    await mongoose.connect(`${process.env.MONGO_URI}`);
  } catch (error) {
    console.error("❌ DB Connection Error:", error.message);
    process.exit(1); // ஏதாச்சும் எரர் வந்தா சர்வரை ஸ்டாப் பண்ணிடும்
  }
};

module.exports = connectDB;