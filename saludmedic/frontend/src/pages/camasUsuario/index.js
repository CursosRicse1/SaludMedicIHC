import RegisterCard from "components/Card/RegisterCard";

export default function CamasScreen() {
  return (
    <form>
      <h1 className="ml-5 mt-5 text-xl font-bold">
        Camas de Asegurados del Usuario
      </h1>

      <div className="bg-gray-200 border-gray-300 rounded m-10 p-5">
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
