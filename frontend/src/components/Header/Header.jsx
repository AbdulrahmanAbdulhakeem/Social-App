import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { useEffect } from "react";
import { logout, reset } from "../../features/auth/authSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/register");
    }
  }, [user]);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div className=" bg-emerald-700 text-base text-slate-200 p-2 md:text-xl">
      <nav className="flex items-center justify-between">
        <div className="p-4 font-bold">
          <Link to="/">Social App</Link>
        </div>
        <div className="">
          <ul className="flex justify-between">
            <li className="p-4 flex">
              <h1 className="flex items-center">
                Welcome {user && user.name}
                <FaUserAlt className="rounded-lg p-1 text-emerald-800 ml-2 bg-white h-6 w-6" />
              </h1>
            </li>
            <li className="flex items-center">
              <button
                onClick={onLogout}
                className="flex items-center p-4 bg-emerald-700 text-neutral-700 rounded-lg transition duration-300 hover:bg-emerald-900 hover:text-neutral-100"
              >
                Logout
                <FaSignOutAlt className="ml-2" />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
