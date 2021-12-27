const headerStyle =
  "p-3 font-bold uppercase bg-gray-400 text-gray-800 border border-gray-300 hidden lg:table-cell";

export default function PacienteTable({ children }) {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className={headerStyle}>Paciente</th>
          <th className={headerStyle}>Cama</th>
          <th className={headerStyle}>Fecha</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
