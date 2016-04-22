var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');
var logger = require('./middleware/logger.js');

var app = express();

app.use(bodyParser.json());
app.use(middleware.addHeaders);
app.use(logger);



app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatest);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesType);


var port = 9090;
app.listen(port, function () {
  console.log('Listening on port ', port);
  console.log(new Date());
  console.log('----------------------------');
})
