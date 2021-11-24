import mysql from 'mysql';
import util from 'util';
const pool = mysql.createPool({
    connectionLimit : 10,
    host :"34.127.116.145" ,
    user:"user" , 
    password: "prueba", 
    port: 3306,
    database: "SaludMedic"
});
pool.getConnection((err , connection) =>{
    if(err)
        console.log("Hubo un error en la conexcion");
    if(connection){
        console.log("conexion exitosa");
        connection.release();}
    return;
});

pool.query = util.promisify(pool.query)