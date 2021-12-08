const express = require('express');
const app = express();

const db = require('./models');

//Routers
const postRouter = require('./routes/Posts')
app.use("/posts", postRouter);

db.sequelize.sync().then(() => {
  app.listen(5000 , () =>{
    console.log("Servidor corriendo en el puerto 5000");
  });
});


app.get('/' , (req , res ) =>{
  res.send("Serivdor operando")
})
