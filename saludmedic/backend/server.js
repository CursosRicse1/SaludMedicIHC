const express = require('express');

const app = express();
const UserRouter = require('./routes/UserRouter.js')
const db = require('./database/conexion');
const cors = require('cors');

//Routers
const postRouter = require('./routes/Posts')

//midleware
app.use(express.json())
app.use("/posts", postRouter);
app.use(cors());
app.use("/auth" , UserRouter );
app.listen(5000 , () =>{
    console.log("Servidor corriendo en el puerto 5000");
  });


app.get('/' , (req , res ) =>{
  res.send("Serivdor operando")
})
