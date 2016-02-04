var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();
//var middleware = require (./middleware.js);
var PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}));

app.use(session)
