// var express = require('express');
// var router = express.Router();
//
// /* GET arts listing. */
// router.get('/', function(req, res, next) {
//   res.render('login');
// });
//
// module.exports = router;


var express = require('express');
var router = express.Router();
var User = require('../models/user');
var ENV = require('../app-env');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/austin-art')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', {
  	user: req.user
  });
});

module.exports = router;
