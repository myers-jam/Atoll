const Changelog = require('../models/Changelog');
require('dotenv').config();

// returns data from the database
module.exports = {
  async getChangelogs(req, res) {
    try {
      // .find({}) returns all documents in the table
      const changelogs = await Changelog.find({});
      return res.json(changelogs);
    } catch (error) {
      return res.status(400).json({
        message: 'Error getting logs'
      });
    }
  }
};