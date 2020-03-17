// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if(process.env.JAWSDS_URL){
  connection = mysql.createConnection(process.env.JAWSDS_URL);
} else {
    connection =mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "Balrog#666",
    database: "burger_db"
    })
  }
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("mySql noderconnected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;