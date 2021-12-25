import Axios from "axios";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "components/TextInput";
import NavButton from "components/Buttons/NavButton";
import Logo from "components/icons/Logo";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const BgImage =
  "https://static.wixstatic.com/media/273aed_8e7a3dfed47f4765ae5deeab1a8dd1df~mv2.jpg/v1/fill/w_1920,h_1080,al_c/273aed_8e7a3dfed47f4765ae5deeab1a8dd1df~mv2.jpg";

export default function SigninScreen() {
  let navigate = useNavigate();

  //make a schema
  const schema = yup.object().shape({
    codigo: yup.string().required("Es un campo requerido."),
    password: yup.string().required("La contraseña es requerida."),
  });

  //Desestructuring useForm
  const {
    register, //campos del formulario
    handleSubmit, //funcion para enviar el formulario
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  Axios.defaults.withCredentials = true;

  const login = (data) => {
    navigate("/main");
    console.log(data);

    Axios.post("http://localhost:5000/auth/login", {
      codigo: data.codigo,

      password: data.password,
    }).then((response) => {
      console.log(response);
    });
  };
  useEffect(() => {
    Axios.get("http://localhost:5000/auth/login").then((response) => {
      console.log(response);
    });
  }, []);
  return (
    <main
      className="h-almost-screen flex justify-center items-center bg-gray-700"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundColor: "black",
      }}
    >
      <div className="flex justify-center items-center bg-gray-300 bg-opacity-40 backdrop-filter backdrop-blur-md w-full h-full">
        <form
          onSubmit={handleSubmit(login)}
          className="flex flex-col w-[80%] sm:w-[70%] md:w-[50%] lg:w-[45%] xl:w-[30%] h-auto justify-center rounded-lg bg-white shadow-2xl text-sm sm:text-base p-5 sm:p-8 md:p-10 lg:p-9 xl:p-14"
        >
          <div className="flex justify-center mb-4 sm:mb-3 md:mb-8">
            <Logo className="w-14 h-14" />
          </div>
          <TextInput
            name="codigo"
            label="Código del seguro"
            className="mb-3"
            register={register}
            errors={errors.codigo}
          />
          <TextInput
            name="password"
            label="Contraseña"
            className="mb-3"
            register={register}
            errors={errors.password}
          />
          <NavButton variant="primary" type="submit">
            Ingresar
          </NavButton>
          <div className="border-solid border-t mt-5 pt-3 text-gray-400 font-normal text-center">
            <span>Si no tienes una cuenta,{` `}</span>
            <Link to="/register">
              <span className="text-blue-700 hover:underline">regístrate</span>
            </Link>
            <span>.</span>
          </div>
        </form>
      </div>
    </main>
  );
}
