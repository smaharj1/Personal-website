var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sujil Maharjan' });
});

router.post('/processImage', function(req,res,next) {
  console.log("File size is " + req.body.file.size);

  res.end("Done");
})

module.exports = router;
