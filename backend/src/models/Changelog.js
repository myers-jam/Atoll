const mongoose = require('mongoose');

// Setup a object via mongoose schema
// Each log will have an description and a date
const ChangelogSchema = new mongoose.Schema({
  date: { 
    type: Date,
    default: Date.now 
  },
  description: String
});

module.exports = mongoose.model('Changelog', ChangelogSchema);