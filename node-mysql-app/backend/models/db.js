const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost', // Your database server
    user: 'sysops', // Your database username
    password: 'sysops', // Your databse password.
    database: 'userdb' //The database you created
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        process.exit(1); // Exit the process if connection fails
    }
    console.log('Connected to MySQL Database!');
});

module.exports = db;
