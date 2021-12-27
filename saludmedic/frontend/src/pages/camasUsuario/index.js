import RegisterCard from "components/Card/RegisterCard";
import Medical from "components/icons/Medical";
import NavButton from "components/Buttons/NavButton";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

export default function CamasScreen() {
  const navigate = useNavigate();
  const [card, setCard] = useState([]);

  // const Camas = (data) => {
  //   Axios.get("http://localhost:5000/api/sendCamas").then((response) => {
  //     setCard(response.data);
  //     console.log(response);
  //   });
  // };

  Axios.get("http://localhost:5000/api/sendCamas").then((response) => {
    setCard(response.data);
  });

  return (
    <main className="flex flex-col items-center justify-center h-auto mt-10 md:mt-24">
      <div className="w-11/12 md:w-4/6 lg:w-5/6 xl:w-7/12">
        <div className="flex flex-row items-center justify-start w-full mb-6 border-b-2 pb-2">
          <i>
            <Medical className="text-green-500 fill-current" />
          </i>
          <span className="pl-2 text-xl font-bold text-left">
            Ver camas de asegurados
          </span>
        </div>
        <form className="flex flex-col bg-[#F5F7FB] rounded-lg border-solid border p-4 h-[32rem]">
          {/* 2do */}
          <div className="h-full overflow-y-scroll w-full content-center justify-self-center grid grid-cols-1 gap-10 2xl:gap-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-self-center place-items-center px-10 ">
            {card.map((e) => (
              <RegisterCard estado={e.estado} paciente={e.nombre} />
            ))}
          </div>
          {/* 3ero */}
          <div className="flex justify-center py-3">
            <NavButton variant="secondary" onClick={() => navigate("/main")}>
              Volver
            </NavButton>
          </div>
        </form>
      </div>
    </main>
  );
}
