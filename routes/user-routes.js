const express = require('express');

const router = express.Router();
const User = require('../db/models/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/* --- REGISTER --- */
router.post('/register', (req, res) => {
  const { email, password, username } = req.body;


  let newUser = new User({
    email,
    password,
    username
  });

  newUser.save()
  .then(user => {
    if (!user) {
      res.status(400).send();
    }
    return res.status(201).send(user);
  })
  .catch(error => {
    sendErrorWithStatus(400, res, error);
  });
});

/* --- LOGIN --- */
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }).then(user => {
    if (!user) {
      return res.status(400).send();
    }
    bcrypt.compare(password, user.password).then(match => {
      if (!match) {
        return res.status(401).send();
      }
      let token = jwt.sign({ _id: user._id }, 'secret');
      return res.status(201).send({ token });
    })
    .catch(error => {
      sendErrorWithStatus(401, res, error);
    });
  })
  .catch(err => {
    sendErrorWithStatus(401, res, err);
  });
});

/* --- HELPER FUNCTIONS --- */
function sendErrorWithStatus(code, res, err) {
  if (err) {
    return res.status(code).send({ err });
  }
  return res.status(code).send();
}

module.exports = router;
