var express = require('express');

const router = express.Router();

/* GET home page. */  
router.get('/', function(req, res, next) {
  res.render('home', { title: 'home' });  
});


module.exports = router;
