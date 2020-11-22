const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  const user = new User({ email: email, password: password });
  await user.save();

  res.send('You mead a post request');
});

module.exports = router;
