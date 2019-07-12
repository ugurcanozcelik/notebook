    const mysql = require('mysql');
    var Mysql = require('./dbConfig');
    var connection = mysql.createConnection(Mysql.config);
    module.exports.updatePerson = function(req,res){
            var Id=req.params.Id;
            var name=req.body.Name;
            var surname=req.body.Surname;
            var phoneNumber=req.body.PhoneNumber;
            var address=req.body.Address;
            var sql = "UPDATE Person SET Name='"+name+"',Surname='"+surname+"',PhoneNumber='"+phoneNumber+"',Address='"+address+"' where Id='"+Id+"'";
            connection.query(sql, function (err, result) {
                if(err) {
                    throw err;
                } 
                res.redirect('/listPerson')
            });    
        }