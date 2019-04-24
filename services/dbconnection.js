const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'database1.c29nwmoj38nu.us-east-1.rds.amazonaws.com',
    user: 'root',
    password: 'engleman',
    database: 'Action'
});

connection.connect(function(err) {
    if(err) {
        console.error('error connection to db: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;