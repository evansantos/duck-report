const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  return res.send('get all route');
});

router.get('/:id', async (req, res) => {
  return res.send('get by id route');
});

router.post('/', async (req, res) => {
  return res.send('post route');
});

router.patch('/:id', (req, res) => {
  return res.send('patch route');
});

router.delete('/:id', (req, res) => {
  return res.send('delete route');
});

module.exports = router;
