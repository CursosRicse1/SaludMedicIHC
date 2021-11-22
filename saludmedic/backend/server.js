import express  from "express";
import data from './data.js';
const app = express();
app.get('/' , (req, res) => {
    res.send('El servidor esta operando')
});

app.listen(5000, () =>{
    console.log('Servidor en http://localhost:5000');
})
app.get('/api/users',(req,res)=>{
    res.send(data.usuarios);
})