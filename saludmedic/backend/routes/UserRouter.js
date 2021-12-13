const express = require("express");
const req = require("express");
const db = require("../database/conexion")
const router = express.Router();


router.post("/register" , ( req , res ) =>{
    
    const codigo = req.body.codigo;
    const DNI = req.body.DNI;
    const contraseña = req.body.contraseña;
    db.query(
      "INSERT INTO prueba (codigo , DNI , contraseña )  VALUES (?,?,?)",
      [codigo, DNI , contraseña],
      (err, result) => {
        console.log(err);
      }
    );
} )

module.exports  = router ;