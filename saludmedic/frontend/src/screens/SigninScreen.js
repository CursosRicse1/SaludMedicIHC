import { Axios } from "axios";

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SigninScreen() {
  const [apellidoSig, setApellidoSig] = useState("");
  const [codigoSig, setCodigoSig] = useState("");


  const login =() =>{
      Axios.post("http://localhost:5000/login", {
          apellido : apellidoSig,
          codigo : codigoSig,
      }).then((response) => {
          console.log(response);
      });
  };
  return (
    <div>
      <div>Iniciar session </div>
      <label>Apellido</label>
      <input
        type="text"
        placeholder="Apellido"
        onChange={(e) => {
          setApellidoSig(e.target.value);
        }}
      ></input>
      <label>Codigo</label>
      <input
        type="text"
        placeholder="Codigo del usuario"
        onChange={(e) => {
          setCodigoSig(e.target.value);
        }}
      ></input>
      <div>
      <button className="block border-2 bg-blue-400 " onClick = {login}>Iniciar session</button>
      </div>
 

      <div>
        Si no tienes una cuenta
        <Link className="text-blue-700" to="/registrar">
          Registrate
        </Link>
      </div>
    </div>
  );
}
