'use strict';

const mongoose = require('mongoose');

exports.index = async (req, res) => {
  res.render('pages/login');
}

exports.home = async (req, res) => {
  res.render('pages/home');
}

exports.login = async (req, res) => {
  res.render('pages/login');
}

exports.quizes = async (req, res) => {
	res.render('pages/quizes')
}

exports.quiz = async (req, res) => {
	res.render('pages/quiz')
}

exports.teste = async (req, res) => {
	res.render('pages/teste')
}
