const Task = require('../models/Task');

const addTaskPage = (req, res) => {
  res.render('addTaskPage');
};

const updateTaskPage = async (req, res) => {
  const task = await Task.findById(req.params.id);

  try {
    res.render('updateTaskPage', {
      title: task.title,
      description: task.description,
      id: req.params.id
    });
  }catch(err) {
    res.json({ error: true, message: err.message });
  }
};

module.exports = { addTaskPage, updateTaskPage };