const db = require("../../../database/conexion");
const req = require("express");

const res = require("express/lib/response");
const express = require("express");
const router = express.Router();

router.post("/difunto" , async  (req , res ) => {
   
    let reqBody = req.body;
    console.log(reqBody)
    const nombre = reqBody.nombre;
    const codigo = reqBody.codigo;
    const dni = reqBody.dni;
    const fecha = reqBody.fecha;
    const hora = reqBody.hora;
    const sexo = reqBody.sexo;
    const descripcion = reqBody.descripcion;
    await  db.query("INSERT INTO difuntos (nombre , dni , fecha , hora , sexo , descripcion ) VALUES ('"+nombre+"' , '"+dni+"' , '"+fecha+"' , '"+hora+"' , '"+sexo+"' , '"+descripcion+"') ;",
   
    (err ,result) => {
       try{
            res.send(result)
            db.query("Delete from  prueba where codigo = '"+codigo+"' ; ")
            db.query("Delete from familiar where codigo = '"+codigo+"' ;")
       }catch(err){
           console.log(err)
       }

            
        }
    )
    })
  
   

module.exports = router;