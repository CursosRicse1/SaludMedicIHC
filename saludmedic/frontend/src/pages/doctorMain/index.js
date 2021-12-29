import PacienteTable from "components/Table/pacienteTable";
import Row from "components/Table/ui/PacTableRow";
import Calendar from "react-calendar";
import Mask from "components/icons/Mask";
import { useNavigate } from "react-router-dom";
import Skull from "components/icons/Skull";
import BedIcon from "components/icons/BedIcon";
import IconButton from "components/Buttons/IconButton";

import { useState } from "react";
import Axios from "axios";

export default function DoctorMain() {
  let navigate = useNavigate();
  const [tabla, setTabla] = useState([]);
  let Url = process.env.REACT_PORT || 'http://34.74.224.156:5000';
  Axios.get(`${Url}/doctor/tabla`)
    .then((response) => {
      setTabla(response.data);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <main className="flex flex-col items-center justify-center h-auto mt-4">
      <div className="w-11/12 md:w-4/6 lg:w-5/6 xl:w-7/12 pt-4">
        <div className="flex flex-row items-center justify-start w-full mb-6 border-b-2 pb-2">
          <i>
            <Mask className="text-green-500 fill-current" />
          </i>
          <h1 className="pl-2 text-xl font-semibold text-left">Vista doctor</h1>
        </div>
        <div className="lg:flex lg:flex-row justify-between mb-4">
          <div className="grid grid-cols-1 justify-self-center mb-4 lg:gap-5 lg:w-full">
            <div className="lg:justify-start lg:pt-4 px-[3%] sm:px-[8%] md:px-[10%] lg:px-[20%] xl:px-16 2xl:px-20">
              <h1 className="font-semibold text-gray-600">Vistas</h1>
              <div className="flex flex-col xl:mt-[8%] xl:flex-row xl:space-x-4 justify-center h-auto mt-4 px-4 sm:px-10 lg:px-0 ">
                <IconButton
                  variant="primary"
                  className="h-16 xl:h-44 mb-4 xl:w-full"
                  onClick={() => {
                    navigate("/main/defuncion");
                  }}
                >
                  Defunción
                  <Skull className="w-10 h-10 xl:w-20 xl:h-20 mt-2 fill-current text-white pl-2 xl:pl-0" />
                </IconButton>
                <IconButton
                  variant="primary"
                  onClick={() => {
                    navigate("/registrar-paciente");
                  }}
                  className="h-16 xl:h-44 xl:w-full"
                >
                  <span>Camas</span>
                  <BedIcon className="w-10 h-10 xl:w-20 xl:h-20 mt-2 fill-current text-white pl-2 xl:pl-0" />
                </IconButton>
              </div>
            </div>
          </div>
          <div className="mb-4 flex flex-col items-center">
            <h1 className="font-semibold text-gray-600">Calendario</h1>
            <Calendar />
          </div>
        </div>
        <PacienteTable>
          {tabla?.map((e) => (
            <Row
              paciente={e.nombre}
              cama={e.estado}
              fecha={`${e.fecha} - ${e.hora}`}
            />
          ))}
        </PacienteTable>
      </div>
    </main>
  );
}
