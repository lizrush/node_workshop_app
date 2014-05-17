var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Node demo app' });
});

router.get('/hello', function(req, res) {
  res.render('hello', { title: 'hello'});
});

module.exports = router;
