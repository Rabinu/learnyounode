var http = require('http');
//var fs = require('fs');
var map = require('through2-map');

var server = http.createServer(function(request, response){
if (request.method !== 'POST'){
  return request.end('sen me a POST\n');
}

var tx = map(function (chunk){
  return chunk.toString().toUpperCase();
});
 request.pipe(tx).pipe(response);

});

server.listen(Number(process.argv[2]));
