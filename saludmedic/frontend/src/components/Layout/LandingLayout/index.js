import Menu from "components/icons/Menu";
import Close from "components/icons/Close";
import DropDown from "components/Dropdown/MenuDropdown";
import { Link } from "react-router-dom";
import { useState } from "react";
import Info from "components/icons/Info";
import News from "components/icons/News";
import UserIcon from "components/icons/User";
import Logo from "components/icons/Logo";

export default function LandingLayout() {
  const variants = {
    primary:
      "transition duration-500 bg-opacity-60 hover:bg-green-300 w-10 h-10 p-1 flex items-center justify-center rounded-lg",
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
          >
            <Logo className="w-9 h-9" />
            <span className="pl-2 hidden sm:flex">SaludMedic</span>
          </Link>
          <ul className="hidden md:flex flex-row space-x-12 items-center">
            <Link to="/informacion">
              <li className={variants["primary"]}>
                <Info className="w-9 h-9" />
              </li>
            </Link>
            <Link to="/noticias">
              <li className={variants["primary"]}>
                <News className="w-9 h-9" />
              </li>
            </Link>
            <Link to="/login">
              <li className={variants["primary"]}>
                <UserIcon className="w-8 h-8" />
              </li>
            </Link>

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
