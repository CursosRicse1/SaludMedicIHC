import Calendar from "react-calendar";
import TextInput from "components/TextInput";
import Select from "components/Select";
import Button from "components/Buttons/NavButton";
import Medical from "components/icons/Medical";
import "react-calendar/dist/Calendar.css";

export default function Atencion() {
  return (
    <main className="flex flex-col items-center justify-start pt-[8%] overflow-y-auto h-almost-screen">
      <div className="w-11/12 md:w-4/6 lg:w-5/6 xl:w-7/12">
        <div className="flex flex-row items-center justify-start w-full mb-6 border-b-2 pb-2">
          <i>
            <Medical className="text-green-500 fill-current" />
          </i>
          <h1 className="pl-2 text-xl font-semibold text-left">Atención</h1>
        </div>
        <div className="grid grid-cols-2 gap-11">
          <form className="px-7">
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
            <div className="w-full flex flex-row justify-center space-x-6 mt-3">
              <Button variant="primary" register={() => null}>
                Reservar
              </Button>
              <Button variant="secondary" register={() => null}>
                Volver
              </Button>
            </div>
          </form>
          <div>
            <span>Calendario</span>
            <Calendar />
          </div>
        </div>
      </div>
    </main>
  );
}
