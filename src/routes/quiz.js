'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/quiz');

router.post('/getQuizes', controller.getQuizes);
router.post('/getQuiz', controller.getQuiz);
router.post('/validateQuiz', controller.validadeQuiz);

module.exports = router;