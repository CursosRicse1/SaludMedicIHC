import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../components/Layout";
import LandingLayout from "components/Layout/LandingLayout";

import HomeScreen from ".";
import RegisterScreen from "./register";
import SigninScreen from "./login";

function App() {
  return (
    <BrowserRouter>
      <header>
        {/* <Layout /> */}
        <LandingLayout />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<SigninScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
