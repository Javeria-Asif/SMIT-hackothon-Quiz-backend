const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  status: { type: String, required: true },
  totalPoints: { type: Number, required: true },
  pointsEarned: { type: Number, required: true },
});

const Result = mongoose.model('Result', ResultSchema);

module.exports = Result;
