
import RegisterCard from "components/Card/RegisterCard";
import Select from "components/Select";

import { useForm } from "react-hook-form";

export default function RegistarPacienteScreen() {
  const { register, handleSubmit } = useForm();

  return (
    <form action="">
      <h1 className="ml-5 mt-5 text-xl font-bold">Registar Pacientes</h1>

      <div className="bg-gray-200 border-gray-300 rounded m-10 p-5">
        <div className="grid grid-cols-4">
          <div>
            <Select
              variant="primary"
              label="Nombre"
              name="nombre"
              options={[{ value: "", label: "" }]}
              register={() => null}
            />
          </div>
        </div>

        <div className="m-10 flex place-content-center">
          <div className="px-5">
            <RegisterCard />
          </div>
          <div className="px-5">
            <RegisterCard />
          </div>
          <div className="px-5">
            <RegisterCard />
          </div>
        </div>
      </div>
    </form>
  );
}
