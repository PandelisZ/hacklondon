var usrDb = require('./app/models/user');

module.exports.get = function(id, callback, response){
  console.log(id);
  function queryDB(){
    usrDb.
      find({ searching: true }).
      where('_id').ne(id).
      limit(1).
      exec(function(err, data){
        if (data.length == 0){
          setTimeout(queryDB()),2000;
        }else{
          callback(data);
          console.log(data);
        };
      });
    // usrDb.findOne({ 'searching': true }).where('_id').ne(id).exec(function (err, data) {
    //   if (err) return handleError(err);
    //   console.log(data);

    //})
  }

  queryDB();

};
