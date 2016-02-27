var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var port = process.env.PORT || 8000;


router.use(function(req, res, next){
  console.log('Something is happening');
  next();
});

app.use(bodyParser.urlencoded({
  extended: true
}));









//The express stuff
app.use('/', router);
app.listen(port, function(){
  console.log('Running on' + ' :' + port);
});
