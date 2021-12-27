const express = require("express");
const session = require("express-session");
const app = express();
const aseguradoRouter = require('./routes/asegurado/registrarFamiliar.js')
const UserRouter = require('./routes/UserRouter.js')
const difuntoRouter = require('./routes/doctor/difunto/difuntoRouter.js')
const getRoutes = require('./routes/getRoutes/routes.js')
const db = require('./database/conexion');
const cors = require('cors');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
const req = require('express/lib/request');
const bcrypt = require('bcrypt');
const res = require("express/lib/response");

//Routersss

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "unmsm",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24 * 30,
    },
  })
);
let Sessioncodigo


app.get("/auth/login", async (req, res) => {
  
  if (req.session.user) {

    res.send({ loggedIn: true, user: req.session.user });
    Sessioncodigo = await req.session.user[0].codigo 
  } else {
    res.send({ loggedIn: false });
  }
});
app.get("/registrados" , async (req , res) => {
   const codigo  = await Sessioncodigo;
   try{
   
    db.query(
      " select nombre  from familiar where codigo = '"+codigo+"';",
      (err, result) => {

          res.send(result)
        
      }
    );
  }catch(err){
    console.log(err)
  }
  
})
app.get("/api/sendCamas" ,  async (req , res) => {
  const codigo  = await Sessioncodigo;
  try{
  
   db.query(
     " SELECT DISTINCT f.idFamiliar ,f.nombre , c.estado ,c.especialidad FROM familiar as f  join citas as c on c.nombre = f.nombre where codigo = '"+codigo+"'; "
      ,
     (err, result) => {
    
         res.send(result)
       
     }
   );
 }catch(err){
   console.log(err)
 }
 
})
//LOGING
app.post("/auth/login", (req, res) => {
  let reqBody = req.body;
  const codigo = reqBody.codigo;
  const password = reqBody.password;

  db.query("SELECT * FROM prueba WHERE  codigo = ?", codigo, (err, result) => {
    if (err) {
      res.send({ err: err });
    }
    var dato = [];
    dato = result[0].password;

    if (dato.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (response) {
          req.session.user = result;
          console.log(req.session.user);

          res.send(result);
          console.log("usuario ingreso correctamente");
        } else {
          res.send({ message: "Combiancion incorrecta" });
        }
      });
    } else {
      res.send({ message: "Usuario inexistente" });
    }
  });
});

app.get("/especialista" , (req , res )=> {
  db.query('select p.nombre , count(*) as limite from citas as c join prueba as p on c.especialidad = p.especialidad  where  fecha= curdate()  group by p.nombre' ,
  (err , result )=> {
      try {
        res.send(result)
      }catch(err){

      }
  })
})

app.use("/",getRoutes)
app.use("/auth" , UserRouter );
app.use("/doctor",difuntoRouter)
app.use("/asegurado" , aseguradoRouter);

app.post('/logout' , (req  , res ) => {
  req.session.destroy((err) =>{
    if (err) throw err;
    res.redirect("/")
  })
})

app.listen(5000 , () =>{
    console.log("Servidor corriendo en el puerto ");
  });


