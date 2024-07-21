const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todos');

const app = express();

mongoose.connect('mongodb://localhost:27017/todoapp', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

app.use('/todos', todoRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
