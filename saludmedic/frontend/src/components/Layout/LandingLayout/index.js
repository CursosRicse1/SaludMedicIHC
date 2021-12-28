import Menu from "components/icons/Menu";
import Close from "components/icons/Close";
import DropDown from "components/Dropdown/MenuDropdown";
import { Link } from "react-router-dom";
import { useState } from "react";
import Info from "components/icons/IconInfo";
import IconInfo from "components/icons/IconInfo";
import IconNews from "components/icons/IconNews";
import News from "components/icons/News";
import UserIcon from "components/icons/UserIcon";
import User from "components/icons/User";
import Redirect from "components/icons/Redirect";
import Logo from "components/icons/Logo";
import NavButton from "components/Buttons/NavButton";

export default function LandingLayout() {
  const variants = {
    primary:
      "group transition duration-500 bg-opacity-60 hover:bg-white p-1 flex items-center justify-center rounded-lg text-white font-semibold tracking-widest w-auto",
    secondary: "text-white py-4 hover:text-primary-nav",
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-primary-nav h-[88px] py-6 px-10 shadow-inner">
        <div className="flex justify-between items-center h-full">
          <Link
            to="/"
            className="text-xl text-white font-bold flex flex-row items-center"
            title="Volver al inicio"
          >
            <Logo className="w-9 h-9" />
            <span className="pl-2 hidden sm:flex">SaludMedic</span>
          </Link>
          <ul className="hidden md:flex flex-row space-x-12 items-center">
            <Link to="/informacion">
              <li title="Nosotros" className={variants["primary"]}>
                {/* <Info className="w-9 h-9" /> */}
                <span className="transition duration-500 group-hover:text-blue-500 hidden lg:flex">
                  Nosotros
                </span>
                <IconInfo className="transition duration-500 fill-current pl-1 w-auto group-hover:text-blue-500" />
              </li>
            </Link>
            <Link to="/noticias">
              <li title="Noticias" className={variants["primary"]}>
                {/* <News className="w-9 h-9" /> */}
                <span className="transition duration-500 group-hover:text-blue-500 hidden lg:flex">
                  Noticias
                </span>
                <IconNews className="transition duration-500 fill-current text-blue pl-1 w-auto group-hover:text-blue-500" />
              </li>
            </Link>
            <div className="flex flex-row space-x-2">
              <Link to="/login">
                <div>
                  {/* <UserIcon className="w-8 h-8" /> */}
                  <NavButton variant="terciary">
                    Iniciar sesión
                    <UserIcon className="fill-current text-white pl-1 w-auto" />
                  </NavButton>
                </div>
              </Link>
              <Link to="/register">
                <div>
                  {/* <UserIcon className="w-8 h-8" /> */}
                  <NavButton variant="ter2">
                    Regístrate
                    <Redirect className="fill-current text-blue-500 pl-1 w-auto" />
                  </NavButton>
                </div>
              </Link>
            </div>

            {/* <Link to="/login">
              <li className={variants["primary"]}>Iniciar sesión</li>
            </Link>
            <Link to="/register">
              <li className={variants["primary"]}>Regístrate</li>
            </Link> */}
          </ul>
          <div
            className="flex md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {!open ? (
              <Menu className="fill-current text-white" />
            ) : (
              <Close className="fill-current text-white" />
            )}
          </div>
        </div>
      </nav>
      {open && <DropDown className="md:hidden" />}
    </>
  );
}
