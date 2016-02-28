
var request = require('request');



module.exports.place = function(data, callback) {
  console.log(data);
  get = {
    "key": "AIzaSyDA5DX-cT2GxcDlUFqGwmOk8tweI0MjvZQ",
    "location": '51.5448260,-0.1351860',
    "radius": 3000,
    "minprice": 1,
    "maxprice": 4,
    "type": "restaurant",
    "opennow": true
  }

  for(var key in data) {
    get[key] = data[key];
  }//optional parameters

  var string = "?";

  for(var key in get) {
    if (get.hasOwnProperty(key)) {
      string += key + "=" + get[key] + "&";
    }
  }

  request("https://maps.googleapis.com/maps/api/place/nearbysearch/json" + string, function(error, response, body) {

    var rand = Math.floor(Math.random() * JSON.parse(body).results.length)
    console.log(rand)

    first = JSON.parse(body).results[rand];

    result = {
      "name": first.name, //image size down here
      //"icon": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=100&photoreference=" + first.photos[0].photo_reference + "&key=" + get.key,
      "location": first.geometry.location,
      "vicinity": first.vicinity
    };

    callback(result);
  });
}
