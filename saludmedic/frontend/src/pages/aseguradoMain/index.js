import SpecialistTable from "components/Table/specialistTable";
import NavButton from "components/Buttons/NavButton";
import Calendar from "react-calendar";
import Medical from "components/icons/Medical";
import { useNavigate } from 'react-router';
import React, { useState } from "react";
import Axios from 'axios'
Axios.defaults.withCredentials = true;
export default function AseguradoMain() {
    let navigate = useNavigate();
   
    
    const [codigo , setCodigo] = useState("")
  
      Axios.get("http://localhost:5000/auth/login").then((response) => {
        if (response.data.loggedIn === true) {
          setCodigo(response.data.user[0].codigo);
          console.log(codigo)
        }
      });

    
   
    



  return (
    <form >
    <main className="flex flex-col items-center justify-center h-auto lg:h-almost-screen">
     
      <div className="w-11/12 md:w-4/6 lg:w-5/6 xl:w-7/12 pt-4">
        <div className="flex flex-row items-center justify-start w-full mb-6 border-b-2 pb-2">
          <i>
            <Medical className="text-green-500 fill-current" />
          </i>
          <h1 className="pl-2 text-xl font-semibold text-left">
            Vista asegurado
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 pb-4">
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 space-x-0 mt-2 justify-self-center justify-items-center">
            <NavButton
           
              variant="primary"
              className="w-full sm:w-48 h-14 sm:h-20 my-2 sm:m-0"
              onClick={() =>{
                  navigate("/asegurado")
              }}
            >
              
              Registrar un asegurado
            </NavButton>
            <NavButton
              variant="primary"
              className="w-full sm:w-48 h-14 sm:h-20 my-2 sm:m-0"
              onClick = {()=>{navigate("/camas")}}
            >
              Camas del asegurado
            </NavButton>
            <NavButton
              variant="primary"
              name = {codigo}
              className="w-full sm:w-48 h-14 sm:h-20 col-span-2 sm:col-span-1 mb-4 sm:mb-0"
              type = "submit"
              onClick={() =>{
                navigate("/atencion")
                
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
          <SpecialistTable />
        </div>
      </div>
     
    </main>
    </form>
  );
}
