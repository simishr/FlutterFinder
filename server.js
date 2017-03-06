// DEPENDENCIES..
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}))

// parse application/json
app.use(bodyParser.json())

require("./app/routing/apiRoutes.js") (app);
require("./app/routing/htmlRoutes.js") (app);



app.listen(PORT, function () {
	console.log("App listening on PORT: " + PORT);
	console.log(`Working in ${process.cwd()}.`);
});







// var express = require('express');
// var bodyParser = require('body-parser');

// var app = express();
 
// var PORT = process.env.PORT || 8080;

// // create application/json parser 
// var jsonParser = bodyParser.json()
 
// // create application/x-www-form-urlencoded parser 
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// // parse various different custom JSON types as JSON 
// app.use(bodyParser.json({ type: 'application/*+json' }))
 
// // parse some custom thing into a Buffer 
// app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// // parse an HTML body into a string 
// app.use(bodyParser.text({ type: 'text/html' }))

// require("./app/routing/apiRoutes.js") (app);
// require("./app/routing/htmlRoutes.js") (app);

 
// app.listen(PORT, function() {
// 	console.log("App listening on PORT: " + PORT);
// });