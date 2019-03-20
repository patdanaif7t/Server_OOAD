var express = require('express');
var router = express.Router();
var User = require('../models/userModel');
var _ = require('lodash');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find().sort({created_date: -1}).exec((err, data) => {
    res.render('users', {users : data})
  })
});