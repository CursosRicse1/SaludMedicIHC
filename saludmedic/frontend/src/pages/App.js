import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingLayout from "components/Layout/LandingLayout";

import HomeScreen from ".";
import RegisterScreen from "pages/register";
import SigninScreen from "pages/login";
import MainScreen from "pages/main";
import ErrorScreen from "./error";

function App() {
  return (
    <BrowserRouter>
      <header>
        {/* <Layout /> */}
        <LandingLayout />
      </header>

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<SigninScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path = "/main" element ={<MainScreen/>}/>
        <Route path = "*"  element={<ErrorScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
