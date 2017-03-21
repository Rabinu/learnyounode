var http = require('http');
var bl = require('bl');
/*
var countRequest = process.argv.length;
var counter = 2;



while(counter < countRequest){
getHttpRequest(process.argv[counter],function(err, callback){
  if (err){
    return console.error(err);
  }
  console.log(callback);

  console.log(counter)
});
counter++;
}

*/
function getHttpRequest(httpRequest, callback){
  http.get(httpRequest, function(data){
    data.setEncoding('utf8');
    data.pipe(bl(function(err,input){
      if (err){
        return callback(err);
      }
      input = input.toString();
      callback(null, input);
    }));
  });
}


setTimeout( () => {

  getHttpRequest(process.argv[2],function(err, callback){
    if (err){
      return console.error(err);
    }
    console.log(callback);


  });


  setTimeout( () => {
    getHttpRequest(process.argv[3],function(err, callback){
      if (err){
        return console.error(err);
      }
      console.log(callback);


    });

  
    setTimeout( () => {
      getHttpRequest(process.argv[4],function(err, callback){
        if (err){
          return console.error(err);
        }
        console.log(callback);


      });


    }, 1000);
  }, 1000);
}, 1000);
