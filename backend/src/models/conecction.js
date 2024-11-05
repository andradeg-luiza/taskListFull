const mysql = require('mysql2/promise')

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    passwd: process.env.MYSQL_PSSWD,
    database: process.env.MYSQL_DB
});

module.exports = connection;