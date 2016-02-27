
var request = require('request');



module.exports.place = function(callback, data) {
  get = {
    "key": "AIzaSyDA5DX-cT2GxcDlUFqGwmOk8tweI0MjvZQ",
    "location": '51.5448260,-0.1351860',
    "radius": 1500,
    "minprice": 1,
    "maxprice": 2,
    "type": "restaurant",
    "opennow": true
  }

  for(var key in data) {
    get[key] = data[key];
  }

  var string = "?";

  for(var key in get) {
    if (get.hasOwnProperty(key)) {
      string += key + "=" + get[key] + "&";
    }
  }

  request("https://maps.googleapis.com/maps/api/place/nearbysearch/json" + string, function(error, response, body) {
    //console.log("https://maps.googleapis.com/maps/api/place/nearbysearch/json" + string);
    //console.log(JSON.parse(body).results[0]);
    first = JSON.parse(body).results[0];

    result = {
      "name": first.name,
      "icon": first.icon,
      "location": first.geometry.location,
      "vicinity": first.vicinity
    };

    callback(result);
  });
}