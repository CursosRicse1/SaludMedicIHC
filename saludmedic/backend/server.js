const express = require('express');
const session = require('express-session')
const app = express();
const UserRouter = require('./routes/UserRouter.js')
const db = require('./database/conexion');
const cors = require('cors');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
const req = require('express/lib/request');


//Routerss
/*
const postRouter = require('./routes/Posts');

app.use(session({
  key : "userId" ,
  secret : "UNMSM" , 
  resave : false , 
  saveUninitialized : false,
  cookie : {
    expires : 60*60*3  , 
  }
}))
//midleware

app.use("/posts", postRouter);

app.use(cors({
  origin : ["http://localhost:300/auth/login"] ,
  methods : ["GET" , "POST"] , 
  credentials : true
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended : true}));

*/
app.use(express.json())
app.use(cors())

app.use("/auth" , UserRouter );
app.listen(5000 , () =>{
    console.log("Servidor corriendo en el puerto 5000");
  });


app.get('/' , (req , res ) =>{
  res.send("Serivdor operando")
})
