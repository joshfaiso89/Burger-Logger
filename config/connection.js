const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',

    port: 3306,

    user: 'root',

    password:'Pepsi0109j',
    database:'burgers_db'
})

connection.connect((err) => {
    if(err) throw err;
    console.log('Connected to port 3306' + connection.threadId);
})

module.exports = connection;