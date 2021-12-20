import Logo from "components/icons/Logo";
import { Link } from "react-router-dom";
import UserVariant from "components/icons/UserVariant";
import Logout from "components/icons/Logout";

export default function MainLayout() {
  return (
    <nav className="bg-primary-nav h-[88px] py-6 px-10 shadow-inner">
      <div className="flex justify-between items-center h-full">
        <Link
          to="/"
          className="text-xl text-white font-bold flex flex-row items-center"
        >
          <Logo className="w-8 h-8" />
          <span className="pl-2">SaludMedic</span>
        </Link>
        <div className="flex flex-row items-center">
          <UserVariant className="w-9 h-9 rounded-full border-2 border-green-600" />
          <span className="pl-2 font-medium text-white">Nombre</span>
          <Logout className="w-8 h-8 ml-3 p-1 fill-current text-white rounded-full transition ease-in duration-200 hover:text-red-500 cursor-pointer hover:bg-red-200" />
        </div>
      </div>
    </nav>
  );
}
