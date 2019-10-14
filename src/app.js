'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://Azuel:123@cluster-4mwx5.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, dbName: 'mele', useUnifiedTopology: true })
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

app.use(express.static(__dirname + '/../public'));

// set the view engine to ejs
app.set('view engine', 'ejs'); 

// load of the models
const User = require('./models/user');
const Quiz = require('./models/quiz');
const Book = require('./models/book');

// parse application/json
app.use(bodyParser.json());

// load of the routes
const page = require('./routes/page');
const user = require('./routes/user');
const quiz = require('./routes/quiz');

// allow the CORS 
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	next();
});

// pages
app.use('/', page);

// routes 
app.use('/user', user);
app.use('/quiz', quiz);

module.exports = app;



