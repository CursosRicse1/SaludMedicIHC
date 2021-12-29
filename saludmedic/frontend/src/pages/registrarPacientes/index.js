import RegisterCard from "components/Card/RegisterCard";
import Select from "components/Select";
import Mask from "components/icons/Mask";
import NavButton from "components/Buttons/NavButton";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Axios from "axios";
import { useForm } from "react-hook-form";

export default function RegistarPacienteScreen() {
  const { register, handleSubmit } = useForm();
  const [paciente, setPaciente] = useState([]);

  const enviarDatos = (data) => {
    window.alert("enviado");
    console.log(data);
    Axios.post("http://localhost:5000/doctor/registroPaciente", {
      id: data.id,
    }).then((response) => {
      console.log(response);
      window.alert("Enviado correctamente");
    });
  };

  Axios.get("http://localhost:5000/doctor/pacientes")
    .then((response) => {
      setPaciente(response.data);
    })
    .catch((err) => {
      console.log(err);
    });

  function sendNombre(a) {
    return {
      value: a.id,
      label: a.nombre,
    };
  }

  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center justify-center h-auto mt-10 md:mt-24">
      <div className="w-11/12 md:w-4/6 lg:w-5/6 xl:w-7/12">
        <div className="flex flex-row items-center justify-start w-full mb-6 border-b-2 pb-2">
          <i>
            <Mask className="text-green-500 fill-current" />
          </i>
          <span className="pl-2 text-xl font-bold text-left">
            Registrar pacientes
          </span>
        </div>
        <form
          onSubmit={handleSubmit(enviarDatos)}
          className="flex flex-col bg-[#F5F7FB] rounded-lg border-solid border p-4 h-[90%]"
        >
          {/* 1er */}
          <div>
            <Select
              variant="primary"
              label="Nombre"
              name="id"
              options={paciente?.map((e) => sendNombre(e))}
              register={register}
            />
          </div>
          {/* 2do */}
          <div className="h-96 overflow-y-scroll w-full content-center justify-self-center grid grid-cols-1 gap-10 2xl:gap-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-self-center place-items-center px-10 pt-0">
            {paciente?.map((e) => (
              <RegisterCard registro={e.estado} />
            ))}
            <RegisterCard registro={true}></RegisterCard>
          </div>
          {/* 3ero */}
          <div className="flex justify-center py-3">
            <NavButton variant="secondary" onClick={() => navigate("/main")}>
              Volver
            </NavButton>
          </div>
        </form>
      </div>
    </main>
  );
}
