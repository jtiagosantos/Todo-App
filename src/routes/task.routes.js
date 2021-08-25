const express = require('express');
const route = express.Router();
const taskController = require('../controllers/taskController');

route.post('/add_task', taskController.addTask);
route.get('/', taskController.readTasks);
route.post('/update_task/:id', taskController.updateTask);
route.get('/delete_task/:id', taskController.deleteTask);
route.get('/done_task/:id', taskController.doneTask);

module.exports = route;