const express = require("express");
const req = require("express");
const res = require("express/lib/response");
const db = require("../database/conexion");
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRound = 10 ;

router.post("/", (req, res) => {
  let reqBody = req.body;
  const codigo = reqBody.codigo;
  const dni = reqBody.dni;
  const password = reqBody.password;


  
  db.query(
    "INSERT INTO prueba (codigo , dni , password) VALUES (? , ? , ?) ",
    [codigo, dni, password],
    (err, result) => {
      if(err) res.send({err:err })
      else if (result ) res.send(result)
            else res.send ({message : "error en el registro  "})
    
    }
  );

});
router.post("/login" , (req ,res ) => {
  let reqBody = req.body;
  const codigo = reqBody.codigo;
  const password = reqBody.password;

  db.query(
    "SELECT * FROM prueba WHERE  codigo = ? AND password = ? ",
    [codigo , password] , 
    (err ,result ) => {
      if (err ){
        res.send({err : err})
      }

      if (result) {
        res.send(result);
      }else {
        res.send({ message : "Combiancion incorrecta"});
      }
    }
  );
});

router.get("/", (req, res) => {
  res.send("servidor de usuarios operativo");
});


module.exports = router;
