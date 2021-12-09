import Menu from "components/Icons/Menu";
import Close from "components/Icons/Close";
import DropDown from "components/Dropdown";
import { Link } from "react-router-dom";
import { useState } from "react";
import Info from "components/Icons/Info";
import News from "components/Icons/News";

export default function LandingLayout() {
  const variants = {
    primary:
      "transition duration-500 border-b border-opacity-20 hover:border-white hover:text-gray-600",
    secondary: "text-white py-4 hover:text-primary-nav",
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-primary-nav h-1/5 py-6 px-10 shadow-lg">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl text-white font-bold">
            SaludMedic
          </Link>
          <ul className="hidden md:flex flex-row space-x-12 font-bold items-center text-white">
            <Link to="/informacion" className={variants["primary"]}>
              <li>Información</li>
            </Link>
            <Link to="/noticias" className={variants["primary"]}>
              <News />
              <li>Noticias</li>
            </Link>
            <Link to="/login" className={variants["primary"]}>
              <Info />
              <li>Iniciar sesión</li>
            </Link>
            <Link to="/register" className={variants["primary"]}>
              <li>Regístrate</li>
            </Link>
          </ul>
          <div className="flex md:hidden" onClick={() => setOpen(!open)}>
            {open ? <Menu /> : <Close />}
          </div>
        </div>
      </nav>
      {!open && <DropDown className="md:hidden" />}
    </>
  );
}
