var usrDb = require('./app/models/user');

module.exports.get = function(id, callback, response){
  console.log(id);

  if (id[1] == 'Anything' && id[2]=='Anything'){
    function queryDB(){
      usrDb.
        find({ searching: true }).
        where('_id').ne(id[0]).
        limit(1).
        exec(function(err, data){
          if (data.length == 0){
            setTimeout(queryDB()),2000;
          }else{
            callback(data);
            var matched = [id[0], data._id];

            for(var i =0; i<2; i++){

              usrDb.
                find({ '_id': matched[i]}).
                where('nodel').
                ne(true).
                remove(function(err, data3){

                })

            }


          };
        });
    }
    queryDB();
  }else if(id[1] == 'Anything'){
    function queryDB(){
      usrDb.
        find({ searching: true }).
        where('_id').ne(id[0]).
        where('criteria.topic').equals(id[2]).
        limit(1).
        exec(function(err, data){
          if (data.length == 0){
            setTimeout(queryDB()),2000;
          }else{
            callback(data);
            var matched = [id[0], data._id];

            for(var i =0; i<2; i++){

              usrDb.
                find({ '_id': matched[i]}).
                where('nodel').
                ne(true).
                remove(function(err, data3){

                })

            }


          };
        });
    }
    queryDB();
  }else if(id[2] == 'Anything'){
    function queryDB(){
      usrDb.
        find({ searching: true }).
        where('_id').ne(id[0]).
        where('criteria.food').equals(id[1]).
        limit(1).
        exec(function(err, data){
          if (data.length == 0){
            setTimeout(queryDB()),2000;
          }else{
            callback(data);
            var matched = [id[0], data._id];

            for(var i =0; i<2; i++){

              usrDb.
                find({ '_id': matched[i]}).
                where('nodel').
                ne(true).
                remove(function(err, data3){

                })

            }


          };
        });
    }
    queryDB();
  }else {
    function queryDB(){
      usrDb.
        find({ searching: true }).
        where('_id').ne(id[0]).
        where('criteria.food').equals(id[1]).
        where('criteria.topic').equals(id[2]).
        limit(1).
        exec(function(err, data){
          if (data.length == 0){
            setTimeout(queryDB()),2000;
          }else{
            callback(data);
            var matched = [id[0], data._id];

            for(var i =0; i<2; i++){

              usrDb.
                find({ '_id': matched[i]}).
                where('nodel').
                ne(true).
                remove(function(err, data3){

                })

            }


          };
        });
    }
    queryDB();
  }



};
