import React from "react";
import { Link } from "react-router-dom";

export default function DropDown({ className }) {
  const variants = {
    primary:
      "text-white text-opacity-80 border-b border-opacity-20 border-white py-4 hover:text-primary-nav",
    secondary: "text-white text-opacity-80 py-4",
  };

  return (
    <div
      className={`absolute w-full text-center items-center bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-lg z-10 ${className}`}
    >
      <div className="flex flex-col p-4">
        <Link className={variants["primary"]} to="/noticias">
          Noticias
        </Link>
        <Link className={variants["primary"]} to="/informacion">
          Informacion
        </Link>
        <Link className={variants["primary"]} to="/login">
          Login
        </Link>
        <Link className={variants["secondary"]} to="/register">
          Regístrate
        </Link>
      </div>
    </div>
  );
}
