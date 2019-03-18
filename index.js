var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
  res.render('index');
});

//app.get('/',function(req,res){
//    res.sendFile(__dirname+'/index.html');
//});


//app.get('/about',function(req,res){
//  res.sendFile(__dirname+'/about.html');
//});

app.get('/about',function(req,res){
    res.render('about');
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

app.get('/contact',function(req,res){
    res.render('contact');
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

