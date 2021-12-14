
const  mysql = require('mysql');


const db = mysql.createConnection({
    host: "34.127.116.145",
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
