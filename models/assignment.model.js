const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  userId: { type: String, ref: 'User', required: true },
  task: { type: String, required: true },
  admin: { type: String, ref: 'Admin', required: true },
  status: { type: String, enum: ['pending', 'accept', 'reject'], default: 'pending' },
  
});

module.exports = mongoose.model('Assignment', assignmentSchema);

