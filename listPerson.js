const mysql = require('mysql');
var Mysql = require('./dbConfig');
var connection = mysql.createConnection(Mysql.config);
module.exports.listPerson = function(req,res){
    connection.query('SELECT * FROM Person', function(err, result) {
        if(err){
            console.log('could not connect to db');
            throw err;
        } 
        else {
            res.render('listPerson',{listPerson: result,connection:connection});
        }
    });
}