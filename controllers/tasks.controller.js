const Task = require('../models/Task');

const getAllTasks = (req, res) => {
  res.send('all items from the db');
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const createTask = async (req, res) => {
  // res.json(req.body);
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

const deleteTask = (req, res) => {
  // Task.find(req.params.id)
  res.send('task deleted successfully!');
};

const updateTask = (req, res) => {
  res.send('task updated successfully!');
};

module.exports = {
  getAllTasks,
  getTask,
  deleteTask,
  updateTask,
  createTask,
};
