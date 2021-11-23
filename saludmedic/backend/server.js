import express  from "express";
import data from './data.js';
const app = express();
app.get('/' , (req, res) => {
    res.send('El servidor esta operando')
});
const port = process.env.PORT || 5000; 

app.listen(port, () =>{
    console.log( `Servidor en http://localhost:${port}`  );
})
app.get('/api/users',(req,res)=>{
    res.send(data.usuarios);
})