import React from "react";
import TextInput from "components/TextInput";
import NavButton from "components/Buttons/NavButton";
import Mask from "components/icons/Mask";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import Select from "components/Select";
import Axios from "axios";
export default function DefuncionScreen() {

  let Url = process.env.REACT_PORT || 'http://34.74.224.156:5000';

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const registerDifunto = (data) => {
    window.alert("enviado");
    console.log(data);
    Axios.post(`${Url}/doctor/difunto`, {
      nombre: data.nombre,
      codigo: data.codigo,
      dni: data.dni,
      fecha: data.fecha,
      hora: data.hora,
      sexo: data.codigo,
      descripcion: data.descripcion,
    }).then(() => {
      window.alert("Enviado correctamente");
    });
  };
  return (
    <main className="flex flex-col items-center justify-center h-auto mt-10 md:mt-24">
      <div className="w-11/12 md:w-4/6 lg:w-5/6 xl:w-7/12">
        <div className="flex flex-row items-center justify-start w-full mb-6 border-b-2 pb-2">
          <i>
            <Mask className="text-green-500 fill-current" />
          </i>
          <h1 className="pl-2 text-xl font-semibold text-left">
            Registro de defunción
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(registerDifunto)}
          className="bg-gray-100 px-2 py-4  sm:p-4 xl:p-8 rounded-lg border mb-6 grid grid-cols-4 gap-3"
        >
          <div className="flex flex-col col-span-2">
            <TextInput
              name="nombre"
              label="Nombre"
              className="mb-1"
              register={register}
            />
          </div>
          <div className="flex flex-col col-span-2 lg:col-span-1">
            <TextInput
              name="codigo"
              label="Codigo"
              className="mb-1"
              register={register}
            />
          </div>
          <div className="flex flex-col col-span-2 lg:col-span-1">
            <TextInput
              name="dni"
              label="DNI"
              className="mb-1"
              register={register}
            />
          </div>
          <div className="flex flex-col col-span-2 lg:col-span-1">
            <TextInput
              name="fecha"
              label="Fecha de la defunción"
              type="date"
              className="mb-1"
              register={register}
            />
          </div>
          <div className="flex flex-col col-span-2 lg:col-span-1">
            <TextInput
              name="hora"
              label="Hora de defunción"
              type="time"
              register={register}
            />
          </div>
          <div className="flex flex-col col-span-2">
            <Select
              variant="primary"
              label="Sexo"
              name="sexo"
              options={[
                { value: "Masculino", label: "Masculino" },
                { value: "Femenino", label: "Femenino" },
              ]}
              register={register}
            />
          </div>
          <div className="flex flex-col col-span-4">
            <TextInput
              name="descripcion"
              label="Descripcion de enfermedad"
              className="mb-3"
              register={register}
            />
          </div>
          <div className="w-full flex flex-row justify-center space-x-6 col-span-4">
            <NavButton variant="primary" type="submit">
              Enviar
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
