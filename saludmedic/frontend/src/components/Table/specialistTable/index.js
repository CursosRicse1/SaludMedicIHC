import Row from "components/Table/ui/SpecTableRow";

const headerStyle =
  "p-3 font-bold uppercase bg-green-100 text-gray-600 border border-gray-300 hidden lg:table-cell";

export default function SpecialistTable() {
  return (
    <>
      <table className="w-full">
        <thead>
          <tr>
            <th className={headerStyle}>Especialista</th>
            <th className={headerStyle}>Especialidad</th>
            <th className={headerStyle}>Límite por día</th>
          </tr>
        </thead>
        <tbody>
          <Row especialista="Juan" especialidad="Cardiología" limite="1" />
          <Row especialista="Juan" especialidad="Cardiología" limite="1" />
          <Row especialista="Juan" especialidad="Cardiología" limite="1" />
        </tbody>
      </table>
    </>
  );
}
