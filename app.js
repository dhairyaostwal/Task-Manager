require('dotenv').config();
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');

// middleware
app.use(express.static('./public'));
app.use(express.json());

app.get('/hello', (req, res) => {
  res.status(200);
  res.send('Hello');
});

app.use('/api/v1/tasks', tasks);
// app.get('/api/v1/tasks')    // get all tasks

// app.post('/api/v1/tasks')   // post a task

// app.get('/api/v1/tasks/:id')    // get an individual task

// app.patch('/api/v1/tasks/:id')  // update a task

// app.delete('/api/v1/tasks/:id')  // delete a task

const PORT = process.env.PORT;
const connectionString = process.env.MONGO_URI;

const start = async () => {
  try {
    await connectDB(connectionString);
    app.listen(PORT || 3010, () => {
      console.log(`Server running on http://localhost:${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start()
  .then(() => {
    console.log('Connected to the DB...');
  })
  .catch((err) => {
    console.log(err);
  });
