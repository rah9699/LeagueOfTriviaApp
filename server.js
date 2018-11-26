//http://stackoverflow.com/questions/26773767/purpose-of-installing-bootstrap-through-npm
//Credit here for info on installing bootstrap through npm

var express = require('express');
var app = express();

// prepare server
app.use('/api', api); // redirect API calls
app.use('/', express.static(__dirname + '/www')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap