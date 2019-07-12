const express=require('express');
const app=express();
const path=require('path');
const index=require('./index');


const bodyParser  = require('body-parser');

app.use('/public',express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'))
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); 
app.get('/',index.index);
var PORT = process.env.PORT || 8083;


const listPerson=require('./listPerson');
app.get('/listPerson',listPerson.listPerson)


const addPerson=require('./addPerson')
app.get('/addPerson',addPerson.addPerson);
app.post('/addPerson',addPerson.addPersonPost);

const updatePerson=require('./updatePerson')
app.post('/updatePerson/:Id',updatePerson.updatePerson);

const getPerson = require('./getPerson')
app.get('/getPerson/:Id',getPerson.getPerson);
 

const deletePerson=require('./deletePerson')
app.get('/deletePerson/:Id',deletePerson.deletePerson);


app.listen(PORT,function(req,res){
    console.log('Service listening')
});