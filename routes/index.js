var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api', function(req, res, next) {
  res.render('api', { title: 'Transit Tracker Data' });
})

router.post('/api', function(req, res, next) {
  res.json({ message: 'hooray! welcome to our api!' });  
})

module.exports = router;
