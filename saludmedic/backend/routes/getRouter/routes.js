const db = require("../../../backend/database/conexion");
const req = require("express");

const res = require("express/lib/response");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Serivdor operando");
});

router.get("/especialidad", (req, res) => {
  db.query(
    " SELECT  especialidad   from prueba where rol = 'doctor';",
    (err, result, fields) => {
      res.send(result)
    
    }
  );
});

module.exports = router;