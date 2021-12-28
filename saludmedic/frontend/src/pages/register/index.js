import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "components/TextInput";
import NavButton from "components/Buttons/NavButton";
import Logo from "components/icons/Logo";
import { BgImage } from "pages/login";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import VisibilityOff from "components/icons/VisibilityOff";
import VisibilityOn from "components/icons/VisibilityOn";

export default function RegisterScreen() {
  let navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  let Url = process.env.REACT_PORT || 'http://localhost:5000';
  const schema = yup.object().shape({
    codigo: yup.string().required("Es un campo requerido."),
    dni: yup.string().required("Es un campo requerido."),
    nombre: yup.string().required("Es un campo requerido."),
    apellido: yup.string().required("Es un campo requerido."),
    password: yup.string().required("La contraseña es requerida."),
  });

  const {
    register, //campos del formulario
    handleSubmit, //funcion para enviar el formulario
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const registerForm = (data) => {
    window.alert(data.nombre + "  registrado");
    navigate("/login");
    Axios.post(`${Url}/auth`, {
      codigo: data.codigo,
      dni: data.dni,
      nombre: data.nombre,
      apellido: data.apellido,
      password: data.password,
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
        <form
          onSubmit={handleSubmit(registerForm)}
          className="flex flex-col w-[80%] sm:w-[70%] md:w-[50%] lg:w-[45%] xl:w-[30%] h-auto justify-center rounded-lg bg-white shadow-2xl text-sm sm:text-base p-5 sm:p-8 md:p-10 lg:p-9 xl:p-14"
        >
          <div className="flex justify-center mb-4 sm:mb-3 md:mb-8">
            <Logo className="w-14 h-14" />
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col w-[45%]">
              <TextInput
                name="codigo"
                label="Código del seguro"
                className="mb-3"
                register={register}
                errors={errors.codigo}
              />
            </div>
            <div className="flex flex-col w-[45%]">
              <TextInput
                name="dni"
                label="DNI"
                className="mb-3"
                register={register}
                errors={errors.dni}
              />
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col w-[45%]"></div>
            <div className="flex flex-col w-[45%]"></div>
          </div>
          <TextInput
            name="nombre"
            label="Nombres"
            className="mb-3"
            register={register}
            errors={errors.nombre}
          />
          <TextInput
            name="apellido"
            label="Apellidos"
            className="mb-3"
            register={register}
            errors={errors.apellido}
          />
          <div className="relative flex flex-col justify-center">
            <TextInput
              name="password"
              type={!visible ? "password" : "text"}
              label="Contraseña"
              className="mb-3"
              register={register}
              errors={errors.password}
            />
            {!visible ? (
              <VisibilityOn
                className={`absolute right-[4%] top-10 fill-current text-gray-500 cursor-pointer`}
                onClick={() => setVisible(!visible)}
              />
            ) : (
              <VisibilityOff
                className={`absolute right-[4%] top-10 fill-current text-gray-500 cursor-pointer`}
                onClick={() => setVisible(!visible)}
              />
            )}
          </div>
          <NavButton variant="primary" type = "submit" >
            Registrarse
          </NavButton>
          <div className="border-solid border-t mt-5 pt-3 text-gray-400 font-normal text-center">
            <span>Si ya tienes una cuenta,{` `}</span>
            <Link to="/login">
              <span className="text-blue-700 hover:underline">
                inicia sesión
              </span>
            </Link>
            <span>.</span>
          </div>
        </form>
      </div>
    </main>
  );
}
