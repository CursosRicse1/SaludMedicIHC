import Calendar from "react-calendar";
import TextInput from "components/TextInput";
import Select from "components/Select";
import Button from "components/Buttons/NavButton";
import Medical from "components/icons/Medical";
import { useNavigate } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import Axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
require('dotenv').config();



export default function Atencion() {
  let Url = process.env.REACT_PORT || 'http://34.74.224.156:5000';
 
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const [combo, setCombo] = useState([]);
  const [nombre, setNombre] = useState([]);

  Axios.get(`${Url}/registrados`)
    .then((response) => {
      setNombre(response.data);
    })
    .catch((err) => {
      console.log(err);
    });

  Axios.get(`${Url}/especialidad`)
    .then((response) => {
      setCombo(response.data);
    })
    .catch((err) => {
      console.log(err);
    });

  const registerCita = (data) => {
    window.alert("enviado");
    console.log(data);
    Axios.post(`${Url}/asegurado/cita`, {
      nombre: data.nombre,
      especialidad: data.especialidad,
      fecha: data.fecha,
      hora: data.hora,
    }).then(() => {
      window.alert("Enviado correctamente");
    });
  };

  function prueba(a) {
    return {
      value: a,
      label: a,
    };
  }
  function sendNombre(a) {
    return {
      value: a,
      label: a,
    };
  }

  return (
    <main className="flex flex-col items-center justify-center h-auto mt-10 md:mt-24">
      <div className="w-11/12 md:w-4/6 lg:w-5/6 xl:w-7/12">
        <div className="flex flex-row items-center justify-start w-full mb-6 border-b-2 pb-2">
          <i>
            <Medical className="text-green-500 fill-current" />
          </i>
          <h1 className="pl-2 text-xl font-semibold text-left">Atención</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-11 overflow-y-auto h-[90%] px-4">
          <div className="flex flex-col items-center">
            <span className="text-gray-500 font-semibold pb-2">Calendario</span>
            <Calendar />
          </div>
          <form
            onSubmit={handleSubmit(registerCita)}
            className="px-4 md:px-8 lg:px-7 bg-gray-100 border rounded-lg pt-3 mb-10 lg:mb-0"
          >
            {/* Agregar select paciente */}
            <div className="flex flex-row justify-between">
              <div className="w-[50%]">
                <Select
                  variant="primary"
                  label="Paciente"
                  name="nombre"
                  options={nombre?.map((e) => sendNombre(e.nombre))}
                  register={register}
                />
              </div>
              <div className="w-[45%]">
                <Select
                  variant="primary"
                  label="Especialidad"
                  name="especialidad"
                  options={combo?.map((e) => prueba(e.especialidad))}
                  register={register}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <TextInput
                name="fecha"
                label="Fecha de la cita"
                type="date"
                register={register}
              />
              <TextInput
                name="hora"
                label="Hora de la cita"
                type="time"
                register={register}
              />
            </div>
            <div className="w-full flex flex-row justify-center space-x-6 py-3 ">
              <Button variant="primary" register={register} type="submit">
                Reservar
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  navigate("/main");
                }}
              >
                Volver
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
