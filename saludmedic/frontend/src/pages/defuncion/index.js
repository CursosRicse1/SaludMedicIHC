import React from "react";
import TextInput from "components/TextInput";
import NavButton from "components/Buttons/NavButton";

import { useForm } from "react-hook-form";
import Select from "components/Select";
import Axios from "axios";
export default function DefuncionScreen() {
  const { register, handleSubmit } = useForm();
  const registerDifunto = (data) => {
    window.alert("enviado");
    console.log(data);
    Axios.post("http://localhost:5000/doctor/difunto", {
      nombre: data.nombre,
      codigo: data.codigo,
      dni: data.dni,
      fecha: data.fecha,
      hora: data.hora,
      sexo: data.codigo,
      descripcion: data.descripcion,
    }).then((response) => {
      window.alert("Enviado correctamente");
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(registerDifunto)}>
        <div className="border-solid border-t mt-5 pt-3 text-gray-400 font-normal text-center"></div>
        <main className="h-almost-screen flex justify-center items-center bg-gray-0 py-4 ">
          <div className="flex flex-col w-[80%] sm:w-[70%] md:w-[50%] lg:w-[45%] xl:w-[60%] h-[68%] 2xl:h-[58%] justify-center rounded-lg bg-gray-200 shadow-2xl text-sm sm:text-base p-5 sm:p-8 md:p-10 lg:p-9 xl:p-14">
            <div className=" font-semibold text-xl font-mono flex justify-center opacity-70  ">
              <h1>Especialidad de </h1>
            </div>

            <div className="px-8 flex flex-col w-[100%] ">
              <TextInput
                name="nombre"
                label="Nombre del paciente"
                className="mb-1"
                register={register}
              />
            </div>
            <div className="px-8 flex flex-col w-[100%] ">
              <TextInput
                name="codigo"
                label="Codigo"
                className="mb-1"
                register={register}
              />
            </div>
            <div className="px-8 flex flex-col w-[100%] ">
              <TextInput
                name="dni"
                label="DNI del paciente"
                className="mb-1"
                register={register}
              />
            </div>
            <div className="px-8 flex flex-col w-[100%]  opacity-70">
              <TextInput
                name="fecha"
                label="Fecha de la defunción"
                type="date"
                className="mb-1"
                register={register}
              />
            </div>
            <div className="px-8 flex flex-col w-[100%]  opacity-70">
              <TextInput
                name="hora"
                label="Hora de defuncion"
                type="time"
                register={register}
              />
            </div>
            <div className="px-8 flex flex-col w-[100%] opacity-80">
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
            <div className="px-8 flex flex-col w-[100%]">
              <TextInput
                name="descripcion"
                label="Descripcion de enfermedad"
                className="mb-3"
                register={register}
              />
              <NavButton variant="primary" type="submit">
                Enviar
              </NavButton>
            </div>
            <div className="border-solid border-t mt-5 pt-3 text-gray-400 font-normal text-center"></div>
          </div>
        </main>
      </form>
    </div>
  );
}
