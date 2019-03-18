const path = require('path');

const friends = require('../data/friends');



module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        res.json(friends);
    });

app.post('/api/friends', (req, res) => {
    let sum = 0;
    req.body.answers.forEach(ans => {
        
        sum+=Number(ans);
        
    })
    console.log(sum);
    res.json(friends);
});

};