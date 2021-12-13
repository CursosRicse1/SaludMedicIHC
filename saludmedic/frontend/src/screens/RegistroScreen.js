import React from "react";
import { Formik, Form, Field , ErrorMessage} from "formik";
import * as Yup from "yup";
import axios from "axios";


export default function RegistroScreen() {
  const initialValues = {
    nombre: "",
    apellido: "",
    rol: "",
    celular: "",
    codigo: "",
    contraseña: "",
  };
  const validationSchema = Yup.object().shape({
    nombre: Yup.string().max(15).required(),
    apellido: Yup.string().max(15).required(),
    rol: Yup.string().required(),
    celular: Yup.string().min(9).max(9),
    codigo: Yup.string().min(7).max(7).required(),
    contraseña: Yup.string().min(5).max(8),
  });
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/auth" ,data).then(() => {
    
    console.log("Trabajando")
    })

  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <label>Nombre</label>
          <ErrorMessage name="nombre" component="span"/>
          <Field
            id="inputCreateRegistro"
            name="nombre"
            placeholder="(escrbir su nombre)"
          />
          <label>Apellido</label>
          <ErrorMessage name="apellido" component="span"/>
          <Field
            id="inputCreateRegistro"
            name="apellido"
            placeholder="(escrbir su apellido)"
          />
          <label>Rol</label>
          <ErrorMessage name="rol" component="span"/>
          <Field
            id="inputCreateRegistro"
            name="rol"
            placeholder="(escrbir su rol)"
          />
          <ErrorMessage name="celular" component="span"/>
          <label>Celular</label>
          <Field
            id="inputCreateRegistro"
            name="celular"
            placeholder="(escrbir su celular)"
          />
          <label>Codigo</label>
          <ErrorMessage name="codigo" component="span"/>
          <Field
            autocomplete="off"
            id="inputCreateRegistro"
            name="codigo"
            placeholder="(escrbir su codigo)"
          />
          <label>Contraseña</label>
          <ErrorMessage name="contraseña" component="span"/>

          <Field
            autocomplete="off"
            type="password"
            id="inputCreateRegistro"
            name="contraseña"
            placeholder="(escrbir su contraseña)"
          />
          <button className="px-4 border-black bg-blue-200" type="submit">
            Registrar Usuario
          </button>
        </Form>
      </Formik>
    </div>
  );
}
