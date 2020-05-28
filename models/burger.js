
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

router.post("/api/burgers", function (req, res) {
    connection.query(
      "INSERT INTO burgers (burger_name) VALUES (?)",[req.body.burger], function (err, result) {
        if (err) {
          return res.status(500).end();
        }
  
        // Send back the ID of the new plan
        res.json({ id: result.insertId });
        console.log({ id: result.insertId });
      }
    );
  });

module.exports = router;