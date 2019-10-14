'use strict';

const mongoose = require('mongoose');
let ObjectId = mongoose.Types.ObjectId;
const Quiz = mongoose.model('Quiz');
const User = mongoose.model('User');

exports.getQuizes = async (req, res, next) => {
	try {
		let data = await Quiz.find({'book': new ObjectId(req.body.id)})
    if (data != null)
      res.status(200).send(data)
    else
      res.status(500).send({message: 'Anyone finded: '})
	} catch (e) {
		res.status(500).send({
			message: 'Failed to process your request: ' + e
		})
	}
}

exports.getQuiz = async (req, res, next) => {
	try {
		console.log(req.body.id)
		let data = await Quiz.findOne({'_id': req.body.id})
		console.log(data)
    if (data != null)
      res.status(200).send(data)
    else
      res.status(500).send({message: 'Anyone finded: '})
	} catch (e) {
		res.status(500).send({
			message: 'Failed to process your request: ' + e
		})
	}
}

exports.validadeQuiz = async (req, res, next) => {
	try {
		let data = await Quiz.findOne({'_id': req.body.idQuiz})

		let questions = data.questions
		let points = 0
		let hasDone = false

		for (let i = 0; i < questions.length; i++) {
			if (questions[i].letter == req.body.aws[i])
				points++
		}
		
		let user = await User.findOne({'_id': req.body.idUser})

		for (let i = 0; i < user.quizDone.length; i++) {
			if (user.quizDone[i].quiz == req.body.idQuiz)
				hasDone = true
		}

		if (!hasDone) {
			user.quizDone.push({score: `${points}/${questions.length}`, quiz: req.body.idQuiz})
			user.save()
		}

		res.status(200).send({points: points})
		
	} catch (e) {
		res.status(500).send({
			message: 'Failed to process your request: ' + e
		})
	}
}

function userHasDone() {

}