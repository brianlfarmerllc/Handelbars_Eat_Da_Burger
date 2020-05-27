
const connection = require("../config/connection");
var express = require("express");

var router = express.Router();

router.get('/', function (req, res) {
    connection.query("SELECT * FROM burgers;", function (err, data) {
        if (err) {
            return res.status(500).end();
        }
        res.render('index', { burgers: data });
    })
});

module.exports = router;