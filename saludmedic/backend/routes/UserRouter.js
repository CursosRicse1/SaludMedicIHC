const express = require("express");
const req = require("express");
const res = require("express/lib/response");
const db = require("../database/conexion");
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRound = 10 ;

//REGISTER
router.post("/", (req, res) => {
  let reqBody = req.body;
  const codigo = reqBody.codigo;
  const dni = reqBody.dni;
  const password = reqBody.password;
  
  bcrypt.hash(password , saltRound , (err , hash ) => {
    
    if(err) {
      console.log(err)
      console.log("error")
    }

    db.query(
      "INSERT INTO prueba (codigo , dni , password) VALUES (? , ? , ?) ;",
      [codigo, dni, hash],
      (err, result) => {
        if (err ){
         
          res.send({err : err})
          
        }
  
        if (result) {
          res.send(result);
          res.send("usuario registrado ")
        }else {
          res.send({ message : "Usuario no registrado"});
        }
      }
    );
  });
});

//RUTA USUARIO AUTH 
router.get("/", (req, res) => {
  res.send("servidor de usuarios operativo");
});


module.exports = router;
