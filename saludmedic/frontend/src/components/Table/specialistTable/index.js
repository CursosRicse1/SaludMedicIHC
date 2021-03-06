const headerStyle =
  "p-3 font-bold uppercase bg-gray-400 text-gray-800 border border-gray-300 hidden lg:table-cell";

export default function SpecialistTable({ children }) {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className={headerStyle}>Especialista</th>
          <th className={headerStyle}>Especialidad</th>
          <th className={headerStyle}>Límite por día</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
