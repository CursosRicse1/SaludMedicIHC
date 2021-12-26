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

export default function Atencion() {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const [combo, setCombo] = useState([]);
  const [nombre ,setNombre] = useState([]);
  
 
  
  Axios.get("http://localhost:5000/registrados")
    .then((response) => {
      
      setNombre(response.data);
      
    })
    .catch((err) => {
      console.log(err);
    });

  Axios.get("http://localhost:5000/especialidad")
    .then((response) => {
      
      setCombo(response.data);
      
    })
    .catch((err) => {
      console.log(err);
    });

  const registerCita = (data) => {
    window.alert("enviado");
    console.log(data);
    Axios.post("http://localhost:5000/asegurado/cita", {
      nombre: data.nombre,
      especialidad : data.especialidad,
      fecha : data.fecha,
      hora : data.hora,
    }).then(() => {
      window.alert("Enviado correctamente");
    });
  };

  function prueba(a) {
    var obj = {
      value: a,
      label: a,
    };
    return obj;
  }
  function sendNombre(a) {
    var obj = {
      value: a,
      label: a,
    };
    return obj;
  }

  return (
    <main className="flex flex-col items-center justify-center h-almost-screen">
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
            className="px-0 sm:px-20 md:px-16 lg:px-7"
          >
             <div className="flex flex-col">
              <Select
                variant="primary"
                label="Nombre del paciente"
                name="nombre"
                options={nombre?.map((e) => sendNombre(e.nombre))}
                register={register}
              />
            </div>
            <div className="flex flex-col">
              <Select
                variant="primary"
                label="Selecione la especialidad"
                name="especialidad"
                options={combo?.map((e) => prueba(e.especialidad))}
                register={register}
              />
            </div>
            <div className="flex flex-col">
              <TextInput
                name="fecha"
                label="Fecha de la cita"
                type="date"
                register={register}
              />
              <TextInput
                name = "hora"
                label="Hora de la cita"
                type="time"
                register={register}
              />
            </div>
            <div className="w-full flex flex-row justify-center space-x-6 py-3 ">
              <Button variant="primary" register={register} type = "submit">
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
