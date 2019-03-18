const path = require('path');

module.exports = (app) => {
    
    app.get('/', function(req, res, next) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
      });

      app.get('/survey', function(req, res, next) {
          console.log(req.body);
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    app.post('/survey', function(req, res, next) {
        console.log(req.body);
        res.send('ok');

  });
    
};



