const db = require("../.././backend/database/conexion.js");
const req = require("express");

const res = require("express/lib/response");
const express = require("express");

const router = express.Router();

router.get('/photos' , (req , res ) => {
    try{

        const fileStr = req.body;
        
        console.log(fileStr)
       
        res.send(fileStr)
        res.send(ga)
        


    }catch(err){
        console.log(err)
    }
})


module.exports = router;