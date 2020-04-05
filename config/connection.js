// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if(process.env.JAWSDS_URL){
  connection = mysql.createConnection(process.env.JAWSDS_URL);
} else {
    connection =mysql.createConnection({
    host: "	qbhol6k6vexd5qjs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "jp313d3gup3n7lff",
    password: "flpaewasx19wv8ui",
    database: "qv1plimkbw9nixam"
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