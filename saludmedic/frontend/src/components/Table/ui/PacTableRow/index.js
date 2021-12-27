import BedTable from "components/icons/BedTable";

const bodyStyle =
  "w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static";
const spanStyle =
  "lg:hidden absolute top-0 left-0 bg-gray-400 text-gray-800 px-2 py-1 text-xs font-bold uppercase";
const trStyle =
  "bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0";

export default function PacRowTable({ paciente, cama, fecha }) {
  return (
    <tr className={trStyle}>
      <td className={bodyStyle}>
        <span className={spanStyle}>Paciente</span>
        {paciente}
      </td>
      <td className={bodyStyle}>
        <span className={spanStyle}>Cama</span>
        <div title={cama ? "libre" : "ocupada"} className="flex justify-center">
          <BedTable
            className={`fill-current ${
              cama ? "text-green-600" : "text-red-600"
            }`}
          />
        </div>
      </td>
      <td className={bodyStyle}>
        <span className={spanStyle}>Fecha</span>
        {fecha}
      </td>
    </tr>
  );
}
