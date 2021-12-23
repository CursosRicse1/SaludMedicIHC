const db = require("../../../database/conexion");
const req = require("express");

const res = require("express/lib/response");
const express = require("express");
const router = express.Router();

router.post("/difunto" , (req , res ) => {
   
    let reqBody = req.body;
    console.log(reqBody)
    const nombre = reqBody.nombre;
    const codigo = reqBody.codigo;
    const dni = reqBody.dni;
    const fecha = reqBody.fecha;
    const hora = reqBody.hora;
    const sexo = reqBody.sexo;
    const descripcion = reqBody.descripcion;
    db.query("INSERT INTO difuntos (nombre , dni , fecha , hora , sexo , descripcion ) VALUES (? , ? , ? , ? , ? , ?) ",
    [nombre ,dni , fecha , hora , sexo, descripcion ],
    (err ,result) => {
        if(err) {
            res.send({err:err})
        }
        if(result){
            res.send(result);
            db.query("delete from prueba where codigo = '"+codigo+"' ")
        }else{
            res.send({message : " difunto no registrado"})
        }
            
    }
    )
});
module.exports = router;