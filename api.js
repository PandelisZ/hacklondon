var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var place = require('./place.js');

var port = process.env.PORT || 8000;
var router = express.Router();


var bodyParser = require('body-parser');
var psh = require('./pusher');

router.use(function(req, res, next){
  console.log('Something is happening');
  next();
});

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/', express.static('public'));

app.get('/api/newser', function(req, res){




});



psh.init;





//The express stuff
app.use('/', router);

app.listen(port, function(){
  console.log('Running on' + ' :' + port);
});

place.place(function(result) {console.log(result)} );
