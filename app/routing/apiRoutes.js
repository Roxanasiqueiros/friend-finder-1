const friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function (req,res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req,res) {
        var totalDifference = 0;
        
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        
        var newData = req.body;
        var userName = newData.name;
        var userScores = newData.scores;
        
        var b = userScores.map(function(item) {
            return parseInt(item, 10);
        });
        newData = {
            "name": req.body.name,
            "photo": req.body.photo,
            "scores": b
        };
        console.log("Name: " + userName);
        console.log("User Score " + userScores);
        var sum = b.reduce((a, b) => a + b, 0);
        console.log("Sum of users score " + sum);
        console.log("Best match friend diff " + bestMatch.friendDifference);
                
        for (var i = 0; i < friends.length; i++) {
            totalDifference = 0;
            console.log(friends[i].name);
            console.log("Best match friend diff " + bestMatch.friendDifference);

            var bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
            console.log("Total friend score " + bfriendScore);
            totalDifference += Math.abs(sum - bfriendScore);
            console.log(" -------------------> " + totalDifference);


            
            if (totalDifference <= bestMatch.friendDifference) {
               
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifference;
                    if (bestMatch.name == userName){
                        bestMatch.name = "Patrick Star";
                        bestMatch.photo = "data:image/png;base64,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";
                        bestMatch.friendDifference = 10;
                    }
              
            }
            console.log(totalDifference + " Total Difference");

        }
        console.log(bestMatch);

       
        friends.push(newData);
        console.log("New User added");
        console.log(newData);
        res.json(bestMatch);
    });
};