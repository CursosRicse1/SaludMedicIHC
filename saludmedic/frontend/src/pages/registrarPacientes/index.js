import RegisterCard from "components/Card/RegisterCard";
import Select from "components/Select";
import Mask from "components/icons/Mask";
import NavButton from "components/Buttons/NavButton";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

export default function RegistarPacienteScreen() {
  const { register, handleSubmit } = useForm();
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
        <form className="flex flex-col bg-[#F5F7FB] rounded-lg border-solid border p-4 h-[90%]">
          {/* 1er */}
          <div>
            <Select
              variant="primary"
              label="Nombre"
              name="nombre"
              options={[{ value: "", label: "" }]}
              register={() => null}
            />
          </div>
          {/* 2do */}
          <div className="h-96 overflow-y-scroll w-full content-center justify-self-center grid grid-cols-1 gap-10 2xl:gap-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-self-center place-items-center px-10 pt-[30rem] lg:pt-60">
            <RegisterCard registro={true} />
            <RegisterCard registro={true} />
            <RegisterCard registro={true} />
            <RegisterCard registro={true} />
            <RegisterCard registro={true} />
          </div>
          {/* 3ero */}
          <div className="flex justify-center py-3">
            <NavButton
              variant="secondary"
              onClick={() => navigate("/registrarPacientes")}
            >
              Volver
            </NavButton>
          </div>
        </form>
      </div>
    </main>
  );
}
