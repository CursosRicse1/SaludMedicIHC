import SpecialistTable from "components/Table/specialistTable";
import NavButton from "components/Buttons/NavButton";
import Calendar from "react-calendar";
import Medical from "components/icons/Medical";
import { useNavigate } from "react-router";
import Axios from "axios";
import Row from "components/Table/ui/SpecTableRow";
import React, { useState } from "react";

Axios.defaults.withCredentials = true;
export default function AseguradoMain() {
  let navigate = useNavigate();
  const [especial1, setNombre] = useState([]);
  const [especial2, setNombre2] = useState([]);
 
  Axios.get("http://localhost:5000/especialista")
    .then((response) => {
      setNombre(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  Axios.get("http://localhost:5000/especialidad")
    .then((response) => {
      setNombre2(response.data);
      
    })
    .catch((err) => {
      console.log(err);
    });

    


  return (
    <main className="flex flex-col items-center justify-center h-auto mt-10 md:mt-24">
      <div className="w-11/12 md:w-4/6 lg:w-5/6 xl:w-7/12 pt-4">
        <div className="flex flex-row items-center justify-start w-full mb-6 border-b-2 pb-2">
          <i>
            <Medical className="text-green-500 fill-current" />
          </i>
          <h1 className="pl-2 text-xl font-semibold text-left">
            Vista asegurado
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 mb-6">
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 space-x-0 mt-2 justify-self-center justify-items-center 2xl:grid-cols-3 2xl:gap-2 2xl:content-center">
            <NavButton
              variant="primary"
              className="w-full sm:w-48 h-14 sm:h-20 my-2 sm:m-0 2xl:w-[9.5rem]"
              onClick={() => {
                navigate("/asegurado");
              }}
            >
              Registrar un asegurado
            </NavButton>
            <NavButton
              variant="primary"
              className="w-full sm:w-48 h-14 sm:h-20 my-2 sm:m-0 2xl:w-[9.5rem]"
              onClick={() => {
                navigate("/camas");
              }}
            >
              Camas del asegurado
            </NavButton>
            <NavButton
              variant="primary"
              className="w-full sm:w-48 h-14 sm:h-20 col-span-2 sm:col-span-1 mb-4 sm:mb-0 2xl:w-[9.5rem]"
              onClick={() => {
                navigate("/atencion");
              }}
            >
              Generar cita
            </NavButton>
          </div>
          <div className="flex justify-center">
            <Calendar />
          </div>
        </div>
        <div>
          <SpecialistTable>
            {especial1.map((e) => (
              <Row especialista = {e.nombre} 
              
              especialidad = "Doctor"
              limite = {e.limite}>  </Row>
            ))}
          </SpecialistTable>
       
        </div>
      </div>
    </main>
  );
}
