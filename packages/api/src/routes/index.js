const express = require('express');
const ducks = require('./ducks.route');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Duck API is running');
});

router.use('/ducks', ducks);

module.exports = router;
