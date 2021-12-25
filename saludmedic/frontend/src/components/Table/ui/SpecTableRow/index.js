const bodyStyle =
  "w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static";
const spanStyle =
  "lg:hidden absolute top-0 left-0 bg-green-100 px-2 py-1 text-xs font-bold uppercase";
const trStyle =
  "bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0";

export default function RowTable({ especialista, especialidad, limite }) {
  return (
    <tr className={trStyle}>
      <td className={bodyStyle}>
        <span className={spanStyle}>Especialista</span>
        {especialista}
      </td>
      <td className={bodyStyle}>
        <span className={spanStyle}>Especialidad</span>
        {especialidad}
      </td>
      <td className={bodyStyle}>
        <span className={spanStyle}>Límite</span>
        <span className="rounded bg-green-500 py-1 px-3 text-xs text-white font-bold">
          {limite}/5
        </span>
      </td>
    </tr>
  );
}
