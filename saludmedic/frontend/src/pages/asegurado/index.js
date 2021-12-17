import NavButton from "components/Buttons/NavButton";
import TextInput from "components/TextInput";
import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

export default function AseguradoScreen() {
  const { register, handleSubmit } = useForm();

  return (
    <Fragment>
      <h1 className="ml-5 mt-5 text-xl">Registrar Asegurados</h1>

      <div className="bg-gray-200 border-gray-300 rounded m-10 p-5">
        <div className="grid grid-cols-4 grid-rows-4 gap-2">
          <div className="col-span-2 flex flex-col">
            <TextInput
              name="Nombres"
              label="Nombres"
              className=""
              register={register}
            />
          </div>
          <div className="col-span-2 flex flex-col">
            <TextInput
              name="Apellidos"
              label="Apellidos"
              className=""
              register={register}
            />
          </div>
          <div className="flex flex-col">
            <TextInput
              name="DNI"
              label="DNI"
              className=""
              register={register}
            />
          </div>
          <div className="flex flex-col">
            <TextInput
              name="Fec nacimiento"
              label="Fec nacimiento"
              className=""
              register={register}
            />
          </div>
          <div className="col-span-2 flex flex-col">
            <TextInput
              name="E-mail"
              label="E-mail"
              className=""
              register={register}
            />
          </div>
          <div className="col-span-3 flex flex-col">
            <TextInput
              name="Direccion"
              label="Direccion"
              className=""
              register={register}
            />
          </div>
          <div className="flex flex-col">
            <TextInput
              name="Telefono"
              label="Telefono"
              className=""
              register={register}
            />
          </div>
          <div className="col-start-2 col-end-3">
            <NavButton variant="primary" type="submit">
              Registrar
            </NavButton>
          </div>
          <div className="col-start-3 col-end-4">
            <NavButton variant="primary" type="submit">
              Cancelar
            </NavButton>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
