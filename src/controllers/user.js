'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.get = async (req, res, next) => {
	try {
		const data = await User.find({}, 'name')
		res.status(200).send(data)
	} catch (e) {
		res.status(500).send({
			message: 'Failed to process your request: ' + e
		})
	}
}  

exports.auth = async (req, res, next) => {
	try {
		const data = await User.findOne({'email': req.body.email, 'password': req.body.password})
		if (data != null)
			res.status(200).send(data)
		else
			res.status(400).send(data)
	} catch (e) {
		console.log(e)
		res.status(500).send({
			message: 'Failed to process your request: ' + e
		})
	}
}

exports.listAll = async (req, res, next) => {
	try {
		const data = await User.find({}).populate('books').populate('quizDone.quiz').exec(function(error, posts) {
			console.log(JSON.stringify(posts, null, "\t"))
	})
		console.log(data)
		res.status(200).send(data)
	} catch (error) {
		console.log(e)
		res.status(500).send({
			message: 'Failed to process your request: ' + e
		})
	}
}

exports.getUserById = async (req, res, next) => {
	console.log(req.body)
	try {
		const data = await User.findOne({'_id': req.body.id}).populate('books').populate('quizDone.quiz').exec(function(error, posts) {
			if (posts) 
				res.status(200).send(posts)
		})
	} catch (error) {
		console.log(e)
		res.status(500).send({
			message: 'Failed to process your request: ' + e
		})
	}
}

/*exports.save = async (req, res, next) => {
	try {
		if (!req.body.name || !req.body.user || !req.body.age) {
			res.status(401).send({ message: 'Please, set all fields of Customer'})
			return
		}
		let customer = new Customer({
			name: req.body.name,
			user: req.body.user,
			age: req.body.age
		})
		await customer.save()
		res.status(201).send({
			message: 'Customer saved with success!'
		})
	} catch (e) {
		res.status(400).send({
			message: 'Failed to process your request: ' + e
		})
	}
}*/

/*exports.update = async (req, res, next) => {
	try {
		if (!req.body.name || !req.body.user || !req.body.age) {
			res.status(401).send({ message: 'Please, set all fields of Customer'})
			return
		}
		await Customer.findByIdAndUpdate(req.params.id, {
			$set: {
				name: req.body.name,
				user: req.body.user,
				age: req.body.age
			}
		})
		res.status(200).send({
			message: 'Customer updated with success!'
		})
	} catch (e) {
		res.status(400).send({
			message: 'Failed to process your request: ' + e
		})
	}
}*/

/*exports.delete = async (req, res, next) => {
	try {
		await Customer.findByIdAndDelete(req.params.id)
		res.status(200).send({
			message: 'Customer removed with success!'
		})
	} catch (e) {
		res.status(400).send({
			message: 'Failed to process your request: ' + e
		})
	}
}*/