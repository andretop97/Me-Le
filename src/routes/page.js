'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/page');

router.get('/', controller.index);
router.get('/home', controller.home);
router.get('/login', controller.login);
router.get('/quizes', controller.quizes);
router.get('/quiz', controller.quiz);
router.get('/teste',controller.teste);

module.exports = router;


