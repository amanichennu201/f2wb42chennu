var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Bag', { title: 'Search Results Bag' });
});

module.exports = router;
