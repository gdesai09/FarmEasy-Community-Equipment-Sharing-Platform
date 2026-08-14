import { Link, NavLink } from "react-router-dom";
import { BellRing, UserIcon } from "lucide-react";
import { NavItems } from "../constants/Navitems";

const AppNavbar = () => {
  const user = false;
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 shadow-md bg-white">
      {/* Left Side */}
      <div className="flex items-center gap-3">
        <div className="bg-slate-600 text-white font-bold w-10 h-10 rounded-lg flex items-center justify-center">
          FE
        </div>

        <Link to="/" className="text-2xl font-bold text-green-900">
          FarmEasy
        </Link>
      </div>
      {user ? (
        <>
          <h2 className="text-xl font-semibold ">Dshboard</h2>
          <div className="flex gap-2 justify-center">
            <button className="flex gap-1">
              <BellRing className="h-5 w-5 text-yellow-500" />
              Notification
            </button>
            <button className="flex gap-1">
              <UserIcon />
              Profile
            </button>
          </div>
        </>
      ) : (
        <>
          <ul className="flex gap-6 items-center">
            {NavItems.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} className={({isActive})=>`${isActive ? "border-b-3 rounded p-1 border-green-700" :""}`}>{item.name}</NavLink>
              </li>
            ))}
          </ul>

          <div className="flex item-center gap-4">
            <Link
              to="/register"
              className="px-5 py-2 hover:border hover:border-green-700 rounded-lg hover:font-semibold"
            >
              Register
            </Link>

            <Link
              to="/login"
              className="bg-amber-300 text-white hover:bg-amber-500 px-5 py-2 rounded-lg hover:font-semibold"
            >
              Login
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default AppNavbar;
