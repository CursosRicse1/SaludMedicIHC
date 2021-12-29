import NavButton from "components/Buttons/NavButton";
import TextInput from "components/TextInput";
import Axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Medical from "components/icons/Medical";

Axios.defaults.withCredentials = true;
export default function AseguradoScreen() {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const [codigo, setCodigo] = useState("");
  let Url = process.env.REACT_PORT || 'http://34.74.224.156:5000';
 
  Axios.get(`${Url}/auth/login`).then((response) => {
    if (response.data.loggedIn === true) {
      setCodigo(response.data.user[0].codigo);
    }
  });

  const registerCita = (data) => {
    window.alert("enviado");
    console.log(data);
    Axios.post(`${Url}/asegurado/registarFamiliar`, {
      maca: codigo,
      nombres: data.nombres,
      apellidos: data.apellidos,
      dni: data.dni,
      fecha: data.fecha,
      email: data.email,
      direccion: data.direccion,
      telefono: data.telefono,
    }).then((response) => {
      window.alert("Enviado correctamente");
    });
  };
  return (
    <main className="flex flex-col items-center justify-center h-auto mt-10 md:mt-16">
      <div className="w-11/12 md:w-4/6 lg:w-5/6 xl:w-7/12 pt-4">
        <div className="flex flex-row items-center justify-start w-full mb-6 border-b-2 pb-2">
          <i>
            <Medical className="text-green-500 fill-current" />
          </i>
          <h1 className="pl-2 text-xl font-semibold text-left">
            Registrar un asegurado
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(registerCita)}
          className="bg-gray-100 p-2 sm:p-4 xl:p-8 rounded-lg border"
        >
          <div className="grid grid-cols-4 grid-rows-3 gap-2">
            <div className="col-span-2 flex flex-col">
              <TextInput
                name="nombres"
                label="Nombres"
                className=""
                register={register}
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <TextInput
                name="apellidos"
                label="Apellidos"
                className=""
                register={register}
              />
            </div>
            <div className="flex flex-col col-span-2 sm:col-span-1">
              <TextInput
                name="dni"
                label="DNI"
                className=""
                register={register}
              />
            </div>
            <div className="flex flex-col col-span-2 sm:col-span-1">
              <TextInput
                name="fecha"
                label="Fec nacimiento"
                className="text-gray-400"
                type="date"
                register={register}
              />
            </div>
            <div className="col-span-4 sm:col-span-2 flex flex-col">
              <TextInput
                name="email"
                label="E-mail"
                className=""
                register={register}
              />
            </div>
            <div className="col-span-3 flex flex-col">
              <TextInput
                name="direccion"
                label="Direccion"
                className=""
                register={register}
              />
            </div>
            <div className="flex flex-col">
              <TextInput
                name="telefono"
                label="Telefono"
                className=""
                register={register}
              />
            </div>
          </div>
          <div className="flex justify-center space-x-3 my-4">
            <NavButton variant="primary" type="submit">
              Registrar
            </NavButton>
            <NavButton
              variant="secondary"
              type="submit"
              onClick={() => {
                navigate("/main");
              }}
            >
              Volver
            </NavButton>
          </div>
        </form>
      </div>
    </main>
  );
}
