var http = require('http');
var url = require('url');




var server = http.createServer(function(request, response){

var content = url.parse(request.url, true);
var isoDate = new Date(content.query.iso);
var result ;


function time() {
    return {
        hour: isoDate.getHours(),
        minute: isoDate.getMinutes(),
        second: isoDate.getSeconds()
    };
}

function unixTime() {
        return {
            unixtime: isoDate.getTime()
        };
}

if (content.pathname == "/api/parsetime") {
      result = time();
  } else if (content.pathname == "/api/unixtime") {
      result = unixTime();
}
if (result){
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify(result));
} else {
  response.writeHead(404);
  response.end();
}


});

server.listen(Number(process.argv[2]));
