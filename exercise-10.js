var net = require('net');

var server = net.createServer(function(socket){
  socket.write(printCurrentTime()+'\n');
  socket.end();
});

server.listen(process.argv[2]);


function printCurrentTime(){
var date = new Date();
var minutes = zeroFill(date.getMinutes());
var hour = zeroFill(date.getHours());
var year = zeroFill(date.getFullYear());
var month = zeroFill(date.getMonth() + 1);
var day = zeroFill(date.getDate());

return(year+"-"+month+"-"+day+" "+hour+":"+minutes);
}

function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}
