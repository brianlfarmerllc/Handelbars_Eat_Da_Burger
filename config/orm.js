const connection = require("./Connection");


let orm = {

    // Alphabetical ordered SQL query methode.
    insertOne: function () { },

    selectAll: function (table) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            console.log("\n")
            console.table(result);
        })
    },



    updateOne: function () { }


}

module.exports = orm