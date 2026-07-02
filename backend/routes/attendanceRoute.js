const express = require('express');
const { scanAttendance } = require('../controllers/attendanceController');
const attendanceRouter = express.Router();

// Route configured using exact structure matching your ecommerce project pattern
attendanceRouter.post('/scan', scanAttendance);

module.exports = attendanceRouter;