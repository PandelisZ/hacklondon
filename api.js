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
var match = require('./match');

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
  newUsr.twitter = req.body.twitter;
  newUsr.location.lat = req.body.lat; // lat, long
  newUsr.location.lng = req.body.lng;
  newUsr.searching = true;
  newUsr.nodel = req.body.nodel;
  newUsr.img = 'https://avatars.io/twitter/' + req.body.twitter;
  //newUsr.criteria.distance
  newUsr.criteria = {food: req.body.food, topic: req.body.topic};


  //newUsr.criteria.topic = req.body.topic;

  newUsr.save(function(err,data){
    if(err){
      res.send('Oh f*$k');
    }
    console.log("saved")
    var id = [];
    id.push(data._id);
    id.push(newUsr.criteria.food);
    id.push(newUsr.criteria.topic);
    console.log(id);
    match.get(id, function(resData){

      var coords = resData[0].location.lat + ',' + resData[0].location.lng;
      var parameters = [];
      parameters.location = String(coords);
      parameters.keyword = resData[0].criteria.food.toLowerCase();

      place.place(parameters, function(result){
        result.match = resData[0];
        res.json(result);

      });

    });
  });



});

app.get('/api/map', function(req,res){

  usrDb.
    find({ searching: true }).
    limit(10).
    exec(function(err, data){
      res.json(data);
    });

});

//psh.init;
//psh.hello();

app.get('/api/place', function(req, res) {
  var data = { "location": '51.520658,-0.105688', "keyword": "sushi"};
  place.place(data, function(result) {res.json(result)}, req.query);
});

//The express stuff
app.use('/', router);

app.listen(port, function(){
  console.log('Running on' + ' :' + port);
});
