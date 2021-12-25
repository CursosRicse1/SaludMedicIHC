import Calendar from "react-calendar";
import TextInput from "components/TextInput";
import Select from "components/Select";
import Button from "components/Buttons/NavButton";
import Medical from "components/icons/Medical";
import {useNavigate} from "react-router-dom"
import "react-calendar/dist/Calendar.css";

export default function Atencion() {
  let navigate = useNavigate();

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
          <form className="px-0 sm:px-20 md:px-16 lg:px-7">
            <div className="flex flex-col">
              <Select
                variant="primary"
                label="Selecione la especialidad"
                name="especialidad"
                options={[
                  { value: "Alergia", label: "Alergología" },
                  { value: "Cardio", label: "Cardiología" },
                  { value: "Endocrino", label: "Endocrinología" },
                  { value: "Sangre", label: "Hematología" },
                ]}
                register={() => null}
              />
            </div>
            <div className="flex flex-col">
              <TextInput
                label="Fecha de la cita"
                type="date"
                register={() => null}
              />
              <TextInput
                label="Hora de la cita"
                type="time"
                register={() => null}
              />
            </div>
            <div className="w-full flex flex-row justify-center space-x-6 py-3 ">
              <Button variant="primary" register={() => null}>
                Reservar
              </Button>
              <Button variant="secondary"  onClick = {()=>{ navigate("/main")}}>
                Volver
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
