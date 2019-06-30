var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "k2pdcy98kpcsweia.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    // user: "root",
    // password: "Ucla1234",

    user: "x12lreqiahxoqld0",
    password: "fuopf0r1o9f528vs",
    database: "f64fv6vliqgulp8t"
});

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;