var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();
//var middleware = require (./middleware.js);
var PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
  secret: 'abc',
  cookie: {
    maxAge: 60000
  },
  saveUninitialized: true,
  resave: false
}));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + "/views/home.html");
});

app.get('/login', function(req, res) {
  res.sendFile(process.cwd() + "/views/login.html");
});

app.listen(PORT, function() {
  console.log("App is listening on port %s", PORT);
});
