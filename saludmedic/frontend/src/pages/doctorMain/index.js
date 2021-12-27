import NavButton from "components/Buttons/NavButton";
import PacienteTable from "components/Table/pacienteTable";
import Row from "components/Table/ui/PacTableRow";
import Calendar from "react-calendar";
import Mask from "components/icons/Mask";
import {useNavigate} from 'react-router-dom'
import FileInput from "components/FileInput";
import { useForm } from "react-hook-form";
import { useState } from "react";
import  { Imagen }  from  'cloudinary-react' ;
import Axios from 'axios';

export default function DoctorMain() {
  const {
    register, //campos del formulario
    handleSubmit, //funcion para enviar el formulario
  } = useForm();

  let navigate = useNavigate();
  

  const handleFileChange = (e, field, setFile) => {
    const _file = e.target.files[0];
    setFile(_file);
    setEnviar(_file)
    register(field).onChange(e);
  };

  const [dato, setEnviar ] =useState([]);
  const [fileImage, setFileImage] = useState(null);

  const enviarDato = () => {
    console.log("entro a consulta");


const formData = new FormData();
formData.append("file" , dato)
formData.append("upload_preset" , "ipzowozi")
formData.append("cloud_name" , "saludmedic")
Axios.post("https://api.cloudinary.com/v1_1/saludmedic/image/upload" ,formData).then((response) => {
  console.log(JSON.stringify(response , null , 4))
})
    
  };
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
          <div className="grid grid-cols-2 justify-self-center mb-4 lg:gap-5 lg:w-full">
            <form
              onSubmit={handleSubmit(enviarDato)}
              className="flex flex-col col-span-1 justify-self-center lg:justify-start lg:pt-4"
              enctype = "multipart/form-data"
            >
              <h1 className="font-semibold text-gray-600 pl-4">Foto</h1>
              <div className="flex flex-col items-center">
                <FileInput
                  type="file"
                  name="file"
                  register={register}
                  onChange={(e) => handleFileChange(e, "file", setFileImage)}
                  fileImage={fileImage}
                />
                {/* <img src="" alt="imagen-doctor" className="w-28 h-36 border" /> */}
                <NavButton
                  variant="secondary"
                  type="submit"
                  className="text-xs w-32"
                >
                  Actualizar <br /> foto
                </NavButton>
              </div>
            </form>
            <div className="lg:justify-start lg:pt-4">
              <h1 className="font-semibold text-gray-600">Vistas</h1>
              <div className="flex flex-col justify-center h-auto mt-4 px-4 sm:px-10 lg:px-0 lg:pr-[15%] 2xl:pr-[25%]">
                <NavButton variant="primary" className="h-16 mb-4"  onClick = {() => {navigate("/main/defuncion")}}>
                  Defunción
                </NavButton>
                <NavButton variant="primary"  onClick={() => {
                navigate("/registarpaciente");
              }} className="h-16" >
                  Camas
                </NavButton>
              </div>
            </div>
          </div>
          <div className="mb-4 flex flex-col items-center">
            <h1 className="font-semibold text-gray-600">Calendario</h1>
            <Calendar />
          </div>
        </div>
        <PacienteTable>
          <Row paciente="Juan" cama={true} fecha="22/08/2021" />
          <Row paciente="Juan" cama={false} fecha="22/08/2021" />
          <Row paciente="Juan" cama={true} fecha="22/08/2021" />
          <Row paciente="Juan" cama={false} fecha="22/08/2021" />
          <Row paciente="Juan" cama={true} fecha="22/08/2021" />
        </PacienteTable>
      </div>
    </main>
  );
}
