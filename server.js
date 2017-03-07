// DEPENDENCIES..
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}))

// parse application/json
app.use(bodyParser.json())

require("./app/routing/apiRoutes.js") (app);
require("./app/routing/htmlRoutes.js") (app);



app.listen(PORT, function () {
	console.log("App listening on PORT: " + PORT);
	console.log(`Working in ${process.cwd()}.`);
});







