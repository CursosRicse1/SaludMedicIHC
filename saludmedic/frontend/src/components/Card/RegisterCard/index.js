import Bed from "components/icons/Bed";
import NavButton from "components/Buttons/NavButton";

export default function RegisterCard({ registro, estado, paciente }) {
  return (
    <div className="bg-white rounded-md border-solid border-2 w-48 h-auto cursor-pointer flex flex-col items-center p-5 transition duration-500 hover:shadow-md">
      <div className="h-auto">
        <Bed className="w-28 h-28" />
      </div>
      <h1 className="font-bold mb-2">Cama </h1>
      <div className="flex flex-col w-full space-y-2 text-sm font-semibold text-gray-500">
        <span>
          Estado:
          <span
            className={`font-bold ${
              estado ? "text-red-600" : "text-green-600"
            }`}
          >
            {` ${estado ? "En uso" : "Disponible"}`}
          </span>
        </span>
        <span>{`Paciente: ${paciente}`}</span>
      </div>
      {registro && (
        <NavButton type="submit" className="mt-2" variant="primary">
          {" "}
          Registrar{" "}
        </NavButton>
      )}
    </div>
  );
}
