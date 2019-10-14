'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/book');

router.post('/quizes', controller.listAll);
//router.post('/save', controller.save);
//router.put('/:id', controller.update);
//router.delete('/:id', controller.delete);

module.exports = router;