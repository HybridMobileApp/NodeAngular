var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(express.static("app"));

app.get('/', function (req, res) {
    res.sendfile('app/index.html');
});



  io.on('connection', function(socket){
	  socket.on('chat message', function(msg){
	 
    io.emit('chat message', msg);
  });
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});