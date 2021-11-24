import express  from "express";
import data from './data.js';
import cors from 'cors';
import msql from 'msql';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();


//mildware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());


app.get('/' , (req, res) => {
    res.send('El servidor esta operando v2')
});



const port = process.env.PORT || 5000; 

app.listen(port, () =>{
    console.log( `Servido en http://localhost:${port}`  );
})
app.get('/api/users',(req,res)=>{
    res.send(data.usuarios);
})