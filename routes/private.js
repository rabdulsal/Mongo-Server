const router = require('express').Router();
const authenticate = require('../middleware/authenticate');

router.post('/private', authenticate, (req, res) => {
  const obj = {
    message: 'This is a secret ROUTE',
    secret: 'YOU MAY PASS',
    _id: req._id
  };
  res.status(200).send(obj);
});

module.exports = router;
