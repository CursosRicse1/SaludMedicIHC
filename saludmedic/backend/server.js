const express = require('express');
const app = express()

const db = require('./models');

db.sequelize




app.get('/' , (req , res )=>{
  res.send("servidor operando ");
})
app.listen(5000 , ()=>{
  console.log("server operando en el puerto 5000");
})
