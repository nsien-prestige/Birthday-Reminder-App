const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Birthday Reminder App is live!');
});

module.exports = app;


