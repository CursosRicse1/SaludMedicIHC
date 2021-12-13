import { Axios } from "axios";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "components/TextInput";
import NavButton from "components/Buttons/NavButton";
import Logo from "components/icons/Logo";
export const BgImage =
  "https://static.wixstatic.com/media/273aed_8e7a3dfed47f4765ae5deeab1a8dd1df~mv2.jpg/v1/fill/w_1920,h_1080,al_c/273aed_8e7a3dfed47f4765ae5deeab1a8dd1df~mv2.jpg";

export default function SigninScreen() {
  const [apellidoSig, setApellidoSig] = useState("");
  const [codigoSig, setCodigoSig] = useState("");

  const login = () => {
    Axios.post("http://localhost:5000/login", {
      apellido: apellidoSig,
      codigo: codigoSig,
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
        <div className="flex flex-col w-[80%] sm:w-[70%] md:w-[50%] lg:w-[45%] xl:w-[30%] h-[58%] justify-center rounded-lg bg-white shadow-2xl text-sm sm:text-base p-5 sm:p-8 md:p-10 lg:p-9 xl:p-14">
          <div className="flex justify-center mb-4 sm:mb-3 md:mb-8">
            <Logo className="w-14 h-14" />
          </div>
          <TextInput
            label="Código del seguro"
            className="mb-3"
            register={() => null}
          />
          <TextInput
            label="Contraseña"
            className="mb-3"
            register={() => null}
          />
          <NavButton variant="primary">Ingresar</NavButton>
          <div className="border-solid border-t mt-5 pt-3 text-gray-400 font-normal text-center">
            <span>Si no tienes una cuenta,{` `}</span>
            <Link to="/register">
              <span className="text-blue-700 hover:underline">regístrate</span>
            </Link>
            <span>.</span>
          </div>
        </div>
      </div>
    </main>
  );
}
/* <div>Iniciar sesión</div>
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
    <button className="border-2 bg-blue-400 " onClick={login}>
      Iniciar session
    </button>
  </div> */
