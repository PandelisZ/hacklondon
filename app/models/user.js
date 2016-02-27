// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String,
  location: {
    type: [Number],  // [<longitude>, <latitude>]
    index: '2d'      // create the geospatial index
  },
  searching: Boolean,
  criteria: [{
    distance: Number,
    food: String,
    topic: String
  }],

});

var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;