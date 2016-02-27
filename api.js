var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var place = require('./place.js');

var port = process.env.PORT || 8000;
var router = express.Router();


var mongoose = require('mongoose');

var bodyParser = require('body-parser');
var psh = require('./pusher');
var usrDb = require('./app/models/user');

mongoose.connect('mongodb://hacklondon:hacklondon@ds059694.mlab.com:59694/hacklondon');



router.use(function(req, res, next){
  console.log('Something is happening');
  next();
});

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/', express.static('public'));

app.get('/test', function(req, res){

  res.send('works');

});

app.post('/api/search', function(req, res){

  var newUsr = new usrDb();
  newUsr.name = req.body.name;
  newUsr.location = req.body.location; // longitude, latitude
  newUsr.searching = true;
  //newUsr.criteria.distance
  newUsr.criteria.food = req.body.food;
  newUsr.criteria.topic = req.body.topic;

  newUsr.save(function(err,data){
    if(err){
      res.send('Oh f*$k');
    }

    res.json({"id": data._id});

  });



});



psh.init;

psh.hello();

app.get('/api/place', function(req, res) {
  place.place(function(result) {res.json(result)}, req.query);
});

//The express stuff
app.use('/', router);

app.listen(port, function(){
  console.log('Running on' + ' :' + port);
});
