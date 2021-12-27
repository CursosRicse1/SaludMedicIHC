import NavButton from "components/Buttons/NavButton";
import TextInput from "components/TextInput";
import Axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
Axios.defaults.withCredentials = true;
export default function AseguradoScreen() {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const [codigo, setCodigo] = useState("");

  Axios.get("http://localhost:5000/auth/login").then((response) => {
    if (response.data.loggedIn === true) {
      setCodigo(response.data.user[0].codigo);
    }
  });

  const registerCita = (data) => {
    window.alert("enviado");
    console.log(data);
    Axios.post("http://localhost:5000/asegurado/registarFamiliar", {
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
    <form onSubmit={handleSubmit(registerCita)}>
      <h1 className="ml-5 mt-5 text-xl">Registrar Asegurados</h1>

      <div className="bg-gray-200 border-gray-300 rounded m-10 p-5">
        <div className="grid grid-cols-4 grid-rows-4 gap-2">
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
          <div className="flex flex-col">
            <TextInput
              name="dni"
              label="DNI"
              className=""
              register={register}
            />
          </div>
          <div className="flex flex-col">
            <TextInput
              name="fecha"
              label="Fec nacimiento"
              className="opacity-60"
              type="date"
              register={register}
            />
          </div>
          <div className="col-span-2 flex flex-col">
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
          <div className="col-start-2 col-end-3">
            <NavButton variant="primary" type="submit">
              Registrar
            </NavButton>
          </div>
          <div className="col-start-3 col-end-4">
            <NavButton
              variant="primary"
              type="submit"
              onClick={() => {
                navigate("/main");
              }}
            >
              Volver
            </NavButton>
          </div>
        </div>
      </div>
    </form>
  );
}
