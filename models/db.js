'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'sa',
    password : '123',
    database : 'qlvexe'
});
// connect to database
connection.connect(function(err) {
    if (err) throw err;
	console.log('Database Connected !!!');
});

module.exports = connection;