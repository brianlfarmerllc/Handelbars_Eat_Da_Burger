const util = require("util");
const mysql = require("mysql");


var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db",
  });
}


// using connection to connect
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Setting up connection.query to use promises instead of callbacks
// This allows us to use the async/await syntax
connection.query = util.promisify(connection.query);


module.exports = connection;