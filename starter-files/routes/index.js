const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  res.send('Hey! It works!');
});

router.get('/reverse/:first/:next', (req, res) => {
  // const spread = [...req.params.first];
  // res.send(spread);
  const reverse = [...req.params.first].reverse().join('');
  res.send(reverse);

  // ... is the spread operator, and on a string it 
  // works like string.split(''), where it splits
  // between every letter
  // If used on an array, it splits the elements up to
  // be passed into another function (just see example)
});

module.exports = router;
