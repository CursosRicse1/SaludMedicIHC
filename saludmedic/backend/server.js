import express from "express";

import cors from "cors";
import mysql from "mysql";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "34.127.116.145",
  user: "user",
  password: "prueba",
  password: "prueba",
  password: "prueba",
  port: 3306,
  database: "SaludMedic",
});
pool.getConnection((err, connection) => {
  if (err) console.log("Hubo un error en la conexcion");
  if (connection) {
    console.log("conexion exitosa");
    connection.release();
  }
  return;
});

//mildware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.send("El servidor esta operando ");
});

app.post("/register", (req, res) => {
  const apellido = req.body.apellido;
  const codigo = req.body.codigo;
  pool.query(
    "INSERT INTO prueba (apellido , codigo)  VALUES (?,?)",
    [apellido, codigo],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/session", (req, res) => {
  const apellido = req.body.apellido;
  const codigo = req.body.codigo;
  pool.query(
    "SELECT * FROM prueba  WHERE apellido = ? AND codigo = ?",
    [apellido, codigo],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length>0) {
        res.send(result);
      } else {
        res.send({ message: "Surgio un error con el apellido o el codigo" });
      }
    }
  );
});

//puerto
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Servid en http://localhost:${port}`);
});
