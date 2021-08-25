const Task = require('../models/Task');

const addTask = async (req, res) => {
  const task = await new Task(req.body);

  try {
    await task.save();
    res.redirect('/');
  } catch(err) {
    res.json({ error: true, message: err.message });
  }
};

const readTasks = async (req, res) => {
  const tasks = await Task.find().sort({ _id: -1 });

  try {
    res.render('homePage', { tasks });
  } catch(err) {
    res.json({ error: true, message: err.message });
  }
};

const updateTask = async (req, res) => {
  const taskUpdated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });

  try {
    await taskUpdated.save();
    res.redirect('/');
  } catch(err) {
    res.json({ error: true, message: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect('/');
  }catch(err) {
    res.json({ error: true });
  }
};

const doneTask = async (req, res) => {
  const taskDone = await Task.findByIdAndUpdate(req.params.id, { done: true }, { new: true });

  try {
    await taskDone.save();
    res.redirect('/');
  } catch(err) {
    res.json({ error: true, message: err.message });
  }
};

module.exports = { addTask, readTasks, updateTask, deleteTask, doneTask };