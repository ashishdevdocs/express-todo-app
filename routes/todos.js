const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

runter.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

rounter.post('/', async (req, res) => {
  const newTodo = new Todo({
    text: req.body.text,
    completed: req.body.completed
  });
  await newTodo.save();
  res.json(newTodo);
});

Router.put('/:id', async (req, res) => {
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTodo);
});

Rounter.delete('/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: 'Todo deleted' });
});

Module.exports = router;
