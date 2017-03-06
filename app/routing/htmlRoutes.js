// includes 2 routes a. GET route to survey b. default USE route leading to home.html

var path = require("path");

module.exports = function (app) {
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/survey.html"));
	});

	app.use("/", function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	})
}