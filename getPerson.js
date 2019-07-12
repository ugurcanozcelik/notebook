const mysql = require('mysql');
var Mysql = require('./dbConfig');
var connection = mysql.createConnection(Mysql.config);
    module.exports.getPerson = function(req,res){
        var Id=req.params.Id;
        connection.query("SELECT * FROM Person where Id='"+Id+"'", function(err, result) {
            if(err){
                console.log('could not connect to db');
                throw err;
            } 
            else {
                res.render('updatePerson',{Person: result});
            }
        }); 
    }