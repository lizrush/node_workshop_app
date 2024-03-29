var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Node demo app' });
});

router.get('/hello', function(req, res) {
  res.render('hello', { title: 'hello'});
});

router.get('/third-page', function(req, res) {
  res.render('third-page', { title: 'three'});
});

router.get('/place-kittens', function(req, res) {
  res.render('place-kittens', { title: 'place kittens'});
});

module.exports = router;
