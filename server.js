// dependencies
var express = require("express");
var exphbs = require("express-handlebars");
const orm = require("./config/orm")
const connection = require("./config/connection");

// create an instance of the express app.
var app = express();
// middleware to access the public file
app.use(express.static("public"));

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8000;

// set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get('/', function (req, res) {
    connection.query("SELECT * FROM burgers;", function (err, data) {
        if (err) {
            return res.status(500).end();
        }
        
        res.render('index', { burgers: data });
    })
});

app.listen(PORT, function () {
    // log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
