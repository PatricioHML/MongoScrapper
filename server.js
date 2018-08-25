
// Require our dependencies
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var expressHandlebars = require('express-handlebars');
var bodyParser = require('body-parser');

// Instantiate our Express App
var app = express();

// Designate our public folder as a static directory
app.use(express.static(__dirname + '/public'));

// connect Handlebars to our Express app
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// use bodyParser in our app
app.use(bodyParser.urlencoded({
    extended: false
}));