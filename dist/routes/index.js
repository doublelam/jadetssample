var express = require('express');
var router = express.Router();
var testModel=require('../database/db').modelDb;

/* GET home page. */

testModel.find({'name':'keven'},function(err,doc){
	err?console.log(err):console.log(doc);
});
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', });
});

module.exports = router;
