const mysql = require('mysql');
let connection;

if (process.env.JAWSDB_RUL) {
    connection = mysql.createConnection(process.env.JAWSDB_RUL);
} else {
    const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password:'Pepsi0109j',
        database:'burgers_db'
    });
};
 
connection.connect((err) => {
    if(err) throw err;
    console.log('Connected to port 3306' + connection.threadId);
})

module.exports = connection;