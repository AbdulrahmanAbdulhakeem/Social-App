import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaSignOutAlt ,FaUserAlt} from "react-icons/fa";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const onLogout = (e) => {
    e.preventDefault();
    console.log(user.name);
  };

  return (
    <div className="relative h-20 bg-emerald-700 text-xl p-4">
      <nav className="flex items-center justify-between">
        <div className="p-4">
          <Link to="/">Social Media App</Link>
        </div>
        <div className="">
          <ul className="flex justify-between">
            <li className="p-4 flex"><h1 className="flex items-center">Welcome {user.name} <FaUserAlt className="rounded-lg p-1 text-emerald-800 ml-2 bg-white h-6 w-6"/></h1>  </li>
            <li className="flex items-center">
              <button
                onClick={onLogout}
                className="flex items-center p-4 bg-emerald-700 text-neutral-700 rounded-lg hover:bg-emerald-900 hover:text-neutral-100"
              >
                Logout
            <FaSignOutAlt className="ml-2"/>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;