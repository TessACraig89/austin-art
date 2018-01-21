var express = require('express');
var router = express.Router();

// render art page
router.get('/', function(req, res, next) {
  res.render('art');
});

module.exports = router;
