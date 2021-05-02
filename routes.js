// import express
const express = require('express');
// import controllers
const ChangelogController = require('./controllers/ChangelogController');

require('dotenv').config();
// Assign the router
const routes = express.Router();



/* Getting changelogs */
routes.get('/getChangelogs', ChangelogController.getChangelogs);




module.exports = routes;