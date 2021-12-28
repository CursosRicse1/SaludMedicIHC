
const  mysql = require('mysql');
require('dotenv').config();
console.log(process.env.HOST)
const db = mysql.createConnection({
    host: `${process.env.HOST}`,
    user: "user",
    password: "prueba",
    port: 3306,
    database: "SaludMedic",

})

db.connect(function(error){
    if(error){
       throw error;
    }else{
       console.log('Conexion correcta.');
    }
 });

module.exports = db ; 
