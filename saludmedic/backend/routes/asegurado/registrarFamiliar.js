const db = require("../../../backend/database/conexion.js");
const req = require("express");

const res = require("express/lib/response");
const express = require("express");
const router = express.Router();

router.post("/registarFamiliar", (req, res) => {
  let reqBody = req.body;
  console.log(reqBody);
  const codigo = reqBody.maca;
  const nombre = reqBody.nombres;
  const apellidos = reqBody.apellidos;
  const dni = reqBody.dni;
  const fecha = reqBody.fecha;
  const email = reqBody.email;
  const direccion = reqBody.direccion;
  const telefono = reqBody.telefono;
  
  db.query("INSERT INTO familiar (nombre , apellidos , codigo , dni , fecha , email ,direccion , telefono  ) VALUES (? , ? , ? , ? , ? , ? , ? , ?) ",
    [nombre,apellidos , codigo , dni ,fecha , email  , direccion ,telefono  ],
    (err ,result) => {
        try{
           
            if(result){
                
         
            }
            if (err){
                console.log(err)
            }
        }catch(err){
            console.log(err);
        }           
    }
    )
});
router.post("/registarFamiliar", (req, res) => {
    let reqBody = req.body;
    console.log(reqBody);
    const codigo = reqBody.maca;
    const nombre = reqBody.nombres;
    const apellidos = reqBody.apellidos;
    const dni = reqBody.dni;
    const fecha = reqBody.fecha;
    const email = reqBody.email;
    const direccion = reqBody.direccion;
    const telefono = reqBody.telefono;

  });
  

module.exports = router;
