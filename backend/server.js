// backend/server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

// Import Professional MVC Routes 
const memberRouter = require('./routes/memberRoute');
const trainerRouter = require('./routes/trainerRoute');
const attendanceRouter = require('./routes/attendanceRoute');

// App Config
const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database (Using clean config split-up module)
connectDB();

// Middlewares setup
app.use(express.json()); // JSON data-va parse panna
app.use(cors());

// API Endpoints Setup matching professional pattern
app.use('/api/member', memberRouter);
app.use('/api/trainer', trainerRouter);
app.use('/api/attendance', attendanceRouter);

// Base Test Endpoint
app.get('/', (req, res) => {
  res.send("Gym CRM Professional API is Running smoothly, bro! 🚀");
});

// Port listening
app.listen(PORT, () => {
  console.log(`🚀 Server starts running on port ${PORT}`);
});