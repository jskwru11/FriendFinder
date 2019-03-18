const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = require('./app/routing/htmlRoutes');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/public')));


require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);





app.listen(PORT, () => console.log(`app currently running @ http://localhost:${PORT}`));




