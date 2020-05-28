// dependencies
var express = require("express");

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8000;

// create an instance of the express app.
var app = express();

// middleware to access the public file
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

// set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller");
app.use(routes);

app.listen(PORT, function () {
    // log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
