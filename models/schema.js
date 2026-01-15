const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  DOB: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Birthday', Schema);