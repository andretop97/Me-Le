'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/user');

router.post('/listAll', controller.listAll);
router.post('/list', controller.get);
router.post('/auth', controller.auth);
router.post('/getUserById', controller.getUserById);
//router.post('/save', controller.save);
//router.put('/:id', controller.update);
//router.delete('/:id', controller.delete);

module.exports = router;