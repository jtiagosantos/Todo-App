const express = require('express');
const route = express.Router();
const pageController = require('../controllers/pageController');

route.get('/add_task_page', pageController.addTaskPage);
route.get('/update_task_page/:id', pageController.updateTaskPage);

module.exports = route;