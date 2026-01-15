const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/birthday', (req, res) => {
    res.render('birthday');
});

module.exports = router;