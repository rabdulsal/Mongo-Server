const express = require('express');
const mongoose = require('./db/mongoose');
const userRoutes = require('./routes/user-routes');
const bodyParser = require('body-parser');
const privateRoute = require('./routes/private');

const app = express();

app.use(bodyParser.json()); // Needed to parse json request in body

app.use('/user', userRoutes);
app.use('/private', privateRoute);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
