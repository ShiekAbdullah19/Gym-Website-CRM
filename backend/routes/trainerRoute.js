const express = require('express');
const { addTrainer, listTrainers } = require('../controllers/trainerController');
const trainerRouter = express.Router();

trainerRouter.post('/add', addTrainer);
trainerRouter.get('/list', listTrainers);

module.exports = trainerRouter;