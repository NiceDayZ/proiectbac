var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/about.html',function(req,res){
  res.sendFile(__dirname+'/about.html');
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});

