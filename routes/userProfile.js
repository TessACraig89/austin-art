var express = require('express');
var router = express.Router();

// render user Profile
router.get('/', function(req, res, next) {
  res.render('userProfile');
});

module.exports = router;
