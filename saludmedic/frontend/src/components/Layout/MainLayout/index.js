import Logo from "components/icons/Logo";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import UserVariant from "components/icons/UserVariant";
import Logout from "components/icons/Logout";
import { useState, useEffect } from "react";

export default function MainLayout() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const logout = () => {
    Axios.post("http://localhost:5000/logout").then(navigate("/login"));
    setUser(null);
  };

  useEffect(() => {
    Axios.get("http://localhost:5000/auth/login").then((res) => {
      console.log(res.data);
      setUser(res.data.user[0]);
    });
  }, []);

  return (
    <nav className="bg-primary-nav h-[88px] py-6 px-10 shadow-inner">
      <div className="flex justify-between items-center h-full">
        <Link
          to="/"
          className="text-xl text-white font-bold flex flex-row items-center"
        >
          <Logo className="w-9 h-9" />
          <span className="pl-2 hidden sm:flex">SaludMedic</span>
        </Link>
        <div className="flex flex-row items-center">
          <UserVariant className="w-9 h-9 rounded-full border-2 border-green-600" />
          <span className="pl-2 font-medium text-white">{user?.codigo}</span>
          <button className="w-8 h-8 ml-3" onClick={logout}>
            <Logout className="w-8 h-8 p-1 fill-current text-white rounded-full transition ease-in duration-200 hover:text-red-500 cursor-pointer hover:bg-red-200" />
          </button>
        </div>
      </div>
    </nav>
  );
}
