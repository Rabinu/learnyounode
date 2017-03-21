var http = require('http');

http.get(process.argv[2], function(input){
  input.setEncoding('utf8');
  input.on('data', console.log);
  input.on('error', console.error);
})
