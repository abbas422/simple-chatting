
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// app.get('/hello', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });
app.get('/', function(req, res){
  res.send('hello world');
});



// io.on('connection', function(socket){
	
  

//   socket.on('chat message', function(msg){
//     io.emit('chat message', msg);
//   });
//});
http.listen(process.env.PORT || 3100, function(){
  console.log('listening on *:3000');
});