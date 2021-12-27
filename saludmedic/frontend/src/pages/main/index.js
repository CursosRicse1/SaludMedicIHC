import Axios from "axios";
import AseguradoMain from "pages/aseguradoMain";
import React, { useState, useEffect } from "react";
import DoctorScreen from "pages/doctorMain";
import ErrorScreen from "pages/error";

export default function MainScreen() {
  const [rol, setRole] = useState("");
  const [reloadUser, setReloadUser] = useState(false);

  useEffect(() => {
    setInterval(login, 1000);
  }, [reloadUser]);

  const login = () => {
    Axios.get("http://localhost:5000/auth/login").then((response) => {
      if (response.data.loggedIn === true) {
        setRole(response.data.user[0].rol);
        setReloadUser(true);
      }
    });
  };

  return (
    <div>
      {rol === "asegurado" && <AseguradoMain />}
      {rol === "doctor" && <DoctorScreen />}
      {rol === "" && <ErrorScreen />}

      <h1>f</h1>
    </div>
  );
}
