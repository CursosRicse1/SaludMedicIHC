import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export default function RegisterScreen() {
  const [apellidoReg, setApellidoReg] = useState('');
  const [codigoReg, setCodigoReg] = useState('');

  const register = () => {     
   if(apellidoReg.length ===0  || codigoReg.length === 0){
       window.alert("No se lleno los campos ")  
   }else{
    Axios.post("http://localhost:5000/register", {
        apellido: apellidoReg,
        codigo: codigoReg,
      }).then((response) => {
          
          console.log(response)
      });
     
    };
   }

  return (
    <div>
      <h1>Registrar Usuario</h1>
      <label>Apellido</label>
      <input
        type="text"
        onChange={(e) => {
            setApellidoReg(e.target.value);
        }}
      />
      <label>codigo</label>
      <input
        type="text" name="code"
        
        onChange={(e) => {
            setCodigoReg(e.target.value);
        }}
      />
      
      
      <button className="block border-2"     
      onClick={register}>
      <Link to="/login">Registrar</Link>  
      </button>

    </div>
  );
}
