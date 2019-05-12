//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//configuring the express app

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, './app/public')));

//adding MIDDLEWARE 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

//routes to my application
require(path.join(__dirname, './app/routing/apiroutes'))(app);
require(path.join(__dirname, './app/routing.htmlroutes'))(app);

app.listen(PORT, function () {
    console.log('app is listening on PORT: ' + PORT);
});