import mysql from 'mysql';
import  Express  from 'express';


const conexion = mysql.createPool({
  connectionLimit: 10,
  host: "34.127.116.145",
  user: "user",
  password: "prueba",
  password: "prueba",
  password: "prueba",
  port: 3306,
  database: "SaludMedic",
});

conexion.getConnection((err, connection) => {
  if (err) console.log("Hubo un error en la conexcion");
  if (connection) {
    console.log("conexion exitosa");
    connection.release();
  }
  return;
});

export default conexion;