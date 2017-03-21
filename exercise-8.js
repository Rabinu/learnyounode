var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(input){
  input.setEncoding('utf8');
  /*input.on('data', function(tmp){
    tmp.concat();
    console.log(tmp);
  }
);*/
  input.pipe(bl(function(err, data){
    if (err){
      return console.error(err);
    }
    var newData = data.toString();
    console.log(newData.length)
    console.log(newData);
  }))
});
