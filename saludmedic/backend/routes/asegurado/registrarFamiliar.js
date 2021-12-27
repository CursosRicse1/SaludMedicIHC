const db = require("../../../backend/database/conexion.js");
const req = require("express");

const res = require("express/lib/response");
const express = require("express");
const router = express.Router();


// registrar Familiar
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
  
  db.query("INSERT INTO familiar (nombre , apellidos , codigo , dni , fecha , email ,direccion , telefono  ) VALUES ( '"+nombre+"' , '"+apellidos+"' , '"+codigo+"' , '"+dni+"' , '"+fecha+"' , '"+email+"' , '"+direccion+"' , '"+telefono+"') ",
    (err ,result) => {
        try{
           
            if(result){
                res.send(result)
         
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

//Generar Cita
router.post("/cita", (req, res) => {
    let reqBody = req.body;
   console.log(reqBody)
    const especialidad = reqBody.especialidad;
    const nombre = reqBody.nombre;
  
    const fecha = reqBody.fecha;
    const hora = reqBody.hora;
 
    db.query("INSERT INTO citas  (nombre , especialidad , fecha , hora , estado ) VALUES (? , ? , ? , ? , '1'  ) ",
    [nombre , especialidad , fecha ,hora],
    (err ,result) => {
        try{
           
            if(result){
                console.log("Envio la cita")
                
            }else{
                res.send({message : " difunto no registrado"})
            }
        }catch(err){
            console.log(err);
        }           
    }
    )
  });

  router.get("/tabla" , (req , res )=> {
      db.query("SELECT  distinct p.nombre,c.especialidad , count(*) as limite FROM citas as c join prueba as p on c.especialidad = p.especialidad where  fecha= curdate() ; " , 
      (err , result )=> {
          try {
            res.send(result)
          }catch(err){

          }
      })
  })
  

module.exports = router;
