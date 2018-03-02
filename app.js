// Express 웹 프레임워크 로드
var express = require('express');

// Load Mongoose, an intermediate between MongoDB and Node.js
var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

// Create a Mongoose object
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
    console.log("Connected to MongoDB");
});

// Create an object and connect to MongoDB
var connect = mongoose.connect('mongodb://127.0.0.1:27017/ryaneshop', { useMongoClient: true });

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