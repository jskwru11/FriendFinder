const path = require('path');

const friends = require('../data/friends');



module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
  
        res.json(friends);
    });

app.post('/api/friends', (req, res) => {
    // get new user data
    let newUser = req.body;
    


    // find friend match
    let matchName = ''
    let matchPhoto = '';
    let total = 40;

    for (let i = 0; i < friends.length; i++) {
        

        let diff = 0;
        for (let x = 0; x < newUser.scores.length; x++) {
            diff += Math.abs(friends[i].scores[x] - newUser.scores[x]);
        }
        
        if (diff < total) {

            total = diff;
            matchName = friends[i].name;
            matchPhoto = friends[i].photo;
        }  
    }

    friends.push(newUser);

    res.json({statusCode: 200, name: matchName, photo: matchPhoto})

});

};