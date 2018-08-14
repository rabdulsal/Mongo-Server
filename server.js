const express = require('express');
const mongoose = require('./db/mongoose');
const userRoutes = require('./routes/user-routes');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); // Needed to parse json request in body

app.get('/', (req, res) => {
  res.send('welcome');
});

app.use('/user', userRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
