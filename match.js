var usrDb = require('./app/models/user');

module.exports.get = function(id, callback, response){

  function queryDB(){
    usrDb.findOne({ 'searching': true }).where('_id').ne(id, function (err, data) {
      if (err) return handleError(err);
      if (data != null){
        callback(data);
        console.log(data);
      }else if(data == null){

        setTimeout(queryDB()),2000;

      };
    })
  }

  queryDB();

};
