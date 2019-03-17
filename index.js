var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/index.html', function(req, res){
    res.sendFile(__dirname + '/index.html');
  });

app.get('/about.html',function(req,res){
  res.sendFile(__dirname+'/about.html');
});

app.get('/blog.html',function(req,res){
    res.sendFile(__dirname+'/blog.html');
});

app.get('/blog-single.html',function(req,res){
    res.sendFile(__dirname+'/blog-single.html');
});

app.get('/teachers.html',function(req,res){
    res.sendFile(__dirname+'/teachers.html');
});

app.get('/pricing.html',function(req,res){
    res.sendFile(__dirname+'/pricing.html');
});

app.get('/contact.html',function(req,res){
    res.sendFile(__dirname+'/contact.html');
});

app.get('/course-grid-2.html',function(req,res){
    res.sendFile(__dirname+'/course-grid-2.html');
});

app.get('/course-grid-3.html',function(req,res){
    res.sendFile(__dirname+'/course-grid-3.html');
});

app.get('/course-grid-4.html',function(req,res){
    res.sendFile(__dirname+'/course-grid-4.html');
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});

