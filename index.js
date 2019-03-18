var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

//render the main page
app.get('/', function(req, res){
  res.render('index');
});

//app.get('/',function(req,res){
//    res.sendFile(__dirname+'/index.html');
//});


//app.get('/about',function(req,res){
//  res.sendFile(__dirname+'/about.html');
//});

//render the about page
app.get('/about',function(req,res){
    res.render('about');
});

//render The Blog-Single page (prb FORUM post)
app.get('/blog-single',function(req,res){
    res.render('blog-single');
});

//Render the teachers page
app.get('/teachers',function(req,res){
    res.render('teachers');
});

//Render the pricing page
app.get('/pricing',function(req,res){
    res.render('pricing');
});

//Render the contact page
app.get('/contact',function(req,res){
    res.render('contact');
});


//Render the course page (MAYBE course page)
app.get('/course-grid-4',function(req,res){
    res.render('course-grid-4');
});

//Render the blog page (MAYBE course page 2)
app.get('/blog',function(req,res){
    res.render('blog');
});

//port 8080(DEFAULT)
http.listen(port, function(){
  console.log('listening on *:' + port);
});

