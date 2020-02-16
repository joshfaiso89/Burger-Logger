//Import mysql connection
let connection = require('../config/connection.js');

//Helper function for SQL syntax. for ???
function printQuestionMarks(num) {
    let arr = [];

    for (i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

//Helper function to convert object key/values to SQL syntax
function objToSql(ob) {
    let arr = [];

    for (let key in ob) {
        let value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            //if string with spaces, add quotes Josh Faison => 'Josh Faison'
            value = "'" + value + "'";
        }
        arr.push(key + '=' + value);
    }
    return arr.toString();
}

//object for all SQL statement functions
let orm = {
    all: function(tableInput, cb) {
        let queryString = " SELECT * FROM " + tableInput + ";";
    let statement =     connection.query(queryString, function(err, result) {
            if(err){
                throw err;
            }
            cb(result);
        });
        console.log(statement.sql)
    },
    create: function(table, cols, vals, cb) {
        let queryString = " INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += " )"

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    //objColVals example {name: panther, sleepy: true}
    update: function(table, objColVals, condition, cb) {
        let queryString = " UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
       
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    delete: function(table, condition, cb) {
        let queryString = " DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

//Export orm obj for the model(burger.js)
module.exports = orm;