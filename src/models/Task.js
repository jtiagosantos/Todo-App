const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    uppercase: true
  },
  description: {
    type: String,
    required: true,
    lowercase: true
  },
  done: {
    type: Boolean,
    default: false
  }
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;