// contains 2 routes a. GET route to api/friends(will display a JSON of all possible friends)
// b. a POST routes api/friends that handles incoming survey results. it will also handle the compatibility logic.
var friends = require("../data/flutter.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {

        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        console.log(req.body);

        // here we take the result of the user's survey POST and parse it..
        var userData = req.body;
        var userScores = userData.scores;

        console.log(userScores);

        var totalDifference = 0; //this variable calculates difference between user's scores and others scores.

        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            totalDifference = 0;

            for (var j = 0; j < friends[i].scores[j]; j++) { //looping through the scores of each friends..

                // calculating the difference between scores and sum them into totalDifference.
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                // if the sum of the difference is less than the differences of the current "best match"
                if (totalDifference <= bestMatch.friendDifference) {
                    // resetting the bestMatch to the new friend.
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }
        // after checking, saving the user's data to database
        friends.push(userData);

        // returning a JSON with the user's bestMatch.
        res.json(friends);
    });

}