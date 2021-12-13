import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import TextInput from "components/TextInput";
import NavButton from "components/Buttons/NavButton";
import Logo from "components/icons/Logo";
import { BgImage } from "pages/login";

export default function RegisterScreen() {
  const [DNIReg, setDNIReg] = useState("");
  const [codigoReg, setCodigoReg] = useState("");
  const [ContraseñaReg, setContraseñaReg] = useState("");
  const register = () => {
  
      Axios.post("http://localhost:5000/auth/register", {
        codigo: codigoReg,  
        DNI: DNIReg,
        contraseña : ContraseñaReg ,
      }).then((response) => {
        console.log(response);
      });
    
  };

  return (
    <main
      className="h-almost-screen flex justify-center items-center bg-gray-700"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundColor: "black",
      }}
    >
      <div className="flex justify-center items-center bg-gray-300 bg-opacity-40 backdrop-filter backdrop-blur-md w-full h-full">
        <div className="flex flex-col w-[80%] sm:w-[70%] md:w-[50%] lg:w-[45%] xl:w-[30%] h-[68%] 2xl:h-[58%] justify-center rounded-lg bg-white shadow-2xl text-sm sm:text-base p-5 sm:p-8 md:p-10 lg:p-9 xl:p-14">
          <div className="flex justify-center mb-4 sm:mb-3 md:mb-8">
            <Logo className="w-14 h-14" />
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col w-[45%]">
              <TextInput
                label="Código del seguro"
                className="mb-3"
                register={() => null } onChange={(e) =>{ setCodigoReg(e.target.value)}}
              />
            </div>
            <div className="flex flex-col w-[45%]">
              <TextInput label="DNI" className="mb-3" register={() => null} onChange={(e) =>{ setDNIReg(e.target.value)}}/>
            </div>
          </div>
          <TextInput
            label="Contraseña"
            className="mb-3"
            register={() => null}
            onChange={(e) =>{ setContraseñaReg(e.target.value)}}
          />
          <NavButton onClick={register} variant="primary">Registrarse</NavButton>
          <div className="border-solid border-t mt-5 pt-3 text-gray-400 font-normal text-center">
            <span>Si ya tienes una cuenta,{` `}</span>
            <Link to="/login">
              <span className="text-blue-700 hover:underline">
                inicia sesión
              </span>
            </Link>
            <span>.</span>
          </div>
        </div>
      </div>
    </main>
  );
}
/* <input
    type="text"
    onChange={(e) => {
      setApellidoReg(e.target.value);
    }}
  />
  <label>codigo</label>
  <input
    type="text"
    name="code"
    onChange={(e) => {
      setCodigoReg(e.target.value);
    }}
  />
  <button className="block border-2" onClick={register}>
    <Link to="/login">Registrar</Link>
  </button> */