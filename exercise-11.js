var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
response.writeHead(200, {"Content-Type": "text/plain"});

var readstream = fs.createReadStream(process.argv[3]);
 readstream.pipe(response);
//console.log(fs.createReadStream(process.argv[3]));

//response.end().pipe(fs.createReadStream(process.argv[3]));
});

server.listen(process.argv[2]);
