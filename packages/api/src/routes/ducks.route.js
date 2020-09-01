const express = require('express');
const { getAll, getById, insert, delete: remove, update } = require('../controllers/ducks.controller');

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', insert);
router.patch('/:id', update);
router.delete('/:id', remove);

module.exports = router;
