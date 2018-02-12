var express = require('express');

var app = express();
var port = 3000;

// 라우팅 모듈 포함
var admin = require('./routes/admin');
var home = require('./routes/home');

app.get('/', function(req, res) {
    res.send("Ryan's Awesome Shop - First App");
});

// 라우팅 설정
app.use('/admin', admin);
app.use('/home', home);

app.listen(port, function() {
    console.log('Express.js is listening on port ', port);
});