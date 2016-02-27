var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '183535',
  key: '445796099e90cd7aaf5f',
  secret: 'c5062015223606fe2734',
  encrypted: true
});
pusher.port = 443;

hello = function(){
  pusher.trigger('test_channel', 'my_event', {
    "message": "hello world"
  });
}


//Export Modules

module.exports.init = pusher;
module.exports.hello = hello ;
