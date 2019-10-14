'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
	name: {
		type: String,
		trim: true
	},
	email: {
		type: String,
		trim: true
	},
	password: {
		type: String,
		trim: true
	},
	books: [{type: Schema.ObjectId, ref: 'Book'}],
	quizDone: [{
		score: String,
		quiz: {type: Schema.ObjectId, ref: 'Quiz'}
	}]

})

module.exports = mongoose.model('User', schema, 'users')




