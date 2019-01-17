var express = require("express");

var arrayofScores = [];

// =============================================================
var app = express();
var PORT = process.env.PORT || 5000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);
//===========================================================// Create New Characters - takes in JSON input

// //===========================================================

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
