import NavButton from "components/Buttons/NavButton";
import RegisterCard from "components/Card/RegisterCard";
import Select from "components/Select";
import TextInput from "components/TextInput";
import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

export default function CamasScreen() {
  const { register, handleSubmit } = useForm();

  return (
    <Fragment>
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
    </Fragment>
  );
}