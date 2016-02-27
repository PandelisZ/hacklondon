var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var place = require('./place.js');

var port = process.env.PORT || 8000;

app.listen(port, function(){
  console.log('Running on' + ' :' + port);
});

place.place(function(result) {console.log(result)} );
