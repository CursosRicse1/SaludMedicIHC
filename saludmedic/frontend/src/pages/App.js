import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import LandingLayout from "components/Layout/LandingLayout";
import MainLayout from "components/Layout/MainLayout";

import HomeScreen from ".";
import RegisterScreen from "pages/register";
import SigninScreen from "pages/login";
import MainScreen from "pages/main";
import AtencionScreen from "pages/atencion";
import ErrorScreen from "./error";
import DefuncionScreen from "./defuncion";
import AseguradoScreen from "./asegurado";
import CamasScreen from "./camasUsuario";
import RegistarPacienteScreen from "./registrarPacientes";
import AseguradoMain from "./aseguradoMain";
import Informacion from "./informacion";
import Noticias from "./noticias";
import DoctorMain from "./doctorMain";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      setInterval(login, 1000);
    }
  }, [isLoggedIn, reload]);

  async function login() {
    await Axios.get("http://localhost:5000/auth/login").then((res) => {
      if (res.data.loggedIn === true) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        setReload(true);
      }
    });
  }

  return (
    <BrowserRouter>
      <header>{isLoggedIn ? <MainLayout /> : <LandingLayout />}</header>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<SigninScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/main" element={<MainScreen />} />
        <Route path="/asegurado" element={<AseguradoScreen />} />
        <Route path="/atencion" element={<AtencionScreen />} />
        <Route path="/camas" element={<CamasScreen />} />
        <Route
          path="/registrar-paciente"
          element={<RegistarPacienteScreen />}
        />
        <Route path="/main/defuncion" element={<DefuncionScreen />} />
        <Route path="/asegurado-main" element={<AseguradoMain />} />
        <Route path="/doctor-main" element={<DoctorMain />} />
        <Route path="/informacion" element={<Informacion />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
