const express = require('express');
const { addReminder } = require('../controllers/reminder.controller');

const router = express.Router();

router.post('/create', addReminder);

module.exports = router;