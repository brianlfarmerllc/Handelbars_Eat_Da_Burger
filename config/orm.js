const connection = require("./Connection");


class DB {
    // keeping a reference to the connection
    constructor(connection) {
        this.connection = connection
    }
    // Alphabetical ordered SQL query functions.
    insertOne() {

    }

    selectAll() {

    }

    updateOne() {

    }
}

module.exports = new DB(connection);