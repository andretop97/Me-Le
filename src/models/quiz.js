'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
	title: {
		type: String,
		trim: true
	},
	book: {
		type: {type: Schema.ObjectId, ref: 'Book'}
	},
	questions: [{
		question: {type: String},
		a: {type: String},
		b: {type: String},
		c: {type: String},
		d: {type: String},
		letter: {type: String}
	}]
})

module.exports = mongoose.model('Quiz', schema, 'quizes')




