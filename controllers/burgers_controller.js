
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
      "INSERT INTO burgers (burger_name) VALUES (?)",[req.body.burger_name], function (err, result) {
        if (err) {
          return res.status(500).end();
        }
  
        // Send back the ID of the new plan
        res.json({ id: result.insertId });
        console.log({ id: result.insertId });
      }
    );
  });

router.delete("/api/burgers/:id",function(req, res){
  console.log(req.params.id)
  connection.query(
    "DELETE FROM burgers WHERE id = ?", [req.params.id], function (err, result) {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      } else if (result.affectedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
})
router.put("/api/burgers/:id",function(req, res){
  var devoured = req.body.devoured === "true"

  connection.query(
    "UPDATE burgers SET devoured = ? WHERE id = ?", [devoured, req.params.id], function (err, result) {
      if (err) {
        // If an error occurred, send a generic server failure
        console.log(err)
        return res.status(500).end();
      } else if (result.affectedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
})



module.exports = router;