var express = require('express');
var app = express();

require('./server/config/mongoose.js');

//Settings
var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
const path = require('path');
//public refers to the angular folder app, it is common to call the angular app folder public
app.use(express.static(path.join(__dirname, '/public/dist')));
// app.use(express.static(path.join(__dirname, '/my-angular-app/dist')));
// app.set('views', path.join(__dirname, './client/views'));
// app.set('view engine', 'ejs');

//ROUTES
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);

// Setting our Server to Listen on Port: 9999
app.listen(9999, function() {
  console.log("listening on port 9999");
})
