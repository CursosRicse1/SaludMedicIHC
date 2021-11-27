import express, { response } from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import conexion from "./sql/conexion.js";
import bcrypt, { hash } from "bcrypt";
import cookieParser from 'cookie-parser';
import session from 'express-session';


const saltoTurno = 10 ;
const app = express();

app.use(express.json());
//mildware
app.use(morgan("dev"));

app.use(cors({
  origin:["http://localhost:3000"] , 
  methods : ["GET" , "POST"],
  credentials : true

}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
  key: "userId" , 
  secret : "suscribe",
  resave : false,
  saveUninitialized : false ,
  cookie:{
    expires : 60 * 60 * 24,
  }
}))


//routes
app.get("/", (req, res) => {
  res.send("El servidor esta operando ");
});

app.post("/register", (req, res) => {
  const apellido = req.body.apellido;
  const codigo = req.body.codigo;

  bcrypt.hash(codigo , saltoTurno , (err , hash)=>{

    if(err ){
      console.log(err )
    }

    conexion.query(
      "INSERT INTO prueba (apellido , codigo)  VALUES (?,?)",
      [apellido, hash],
      (err, result) => {
        console.log(err);
      }
    );
  })

});


app.post("/session", (req, res) => {
  const apellido = req.body.apellido;
  const codigo = req.body.codigo;
  
  conexion.query(
    "SELECT * FROM prueba  WHERE apellido = ? ",
    apellido , 
    (err, result) => {
      if (err) {
        res.send({ err: err });
        console.log("usario existente");
      }

      if (result.length>0) {
        
        bcrypt.compare(codigo , result[0].codigo , (error , response )=>{
          if(response){
            res.send(result)
          }else{
            res.send({ message: "Surgio un error con el apellido o el codigo" });
          }
        });

      } else {
        res.send({ message: "No existe un usuario " });
      }
    }
  );
});

//puerto
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Servid en http://localhost:${port}`);
});
