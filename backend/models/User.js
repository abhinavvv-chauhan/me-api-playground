// backend/models/User.js
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  links: {
    github: String,
    demo: String
  }
});

const WorkSchema = new mongoose.Schema({
  company: String,
  position: String,
  duration: String,
  description: String
});

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  education: String,
  skills: [String],
  projects: [ProjectSchema],
  work: [WorkSchema],
  links: {
    github: String,
    linkedin: String,
    portfolio: String
  }
});

module.exports = mongoose.model('User', UserSchema);