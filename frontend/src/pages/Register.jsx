import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUserAlt } from "react-icons/fa";
import { register, login, reset } from "../features/auth/authSlice";

function Register() {
  const [isRegister, setIsRegister] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast('Try Again');
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isSuccess, isLoading, isError, message, navigate, dispatch]);

  const { name, email, password } = formData;

  const onSubmit = (e) => {
    e.preventDefault();

    let userData = {};

    if (isRegister) {
      userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    } else {
      userData = {
        email,
        password,
      };

      dispatch(login(userData));
    }
  };

  const registerSwap = (e) => {
    e.preventDefault();
    setIsRegister((reg) => !reg);
  };

  const demoLogin = (e) => {
    e.preventDefault();

    let userData = {
      email: "nai@gmail.com",
      password: "123456",
    };

    dispatch(login(userData));
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="container flex flex-col items-center my-10 p-10 bg-white rounded-lg border-t-8 border-emerald-900 xl:w-1/2 ">
        <h1 className="pt-3 my-3 flex text-emerald-700 text-3xl">
          <FaUserAlt className="mr-3" />
          {isRegister ? "Register" : "Login"}
        </h1>

        <div className="flex text-neutral-700 p-5 bg-white">
          <form onSubmit={onSubmit}>
            {isRegister && (
              <div>
                <label className="block mb-2 text-lg">Name</label>
                <input
                  className="p-3 mb-3 border-emerald-700 border-2 rounded-md w-80 h-12 md:w-96 focus:outline-none"
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={onChange}
                />
              </div>
            )}

            <div>
              <label className="block mb-2">Email</label>
              <input
                className="p-3 mb-3 border-emerald-700 border-2 rounded-md w-80 h-12 md:w-96 focus:outline-none"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
              />
            </div>

            <div>
              <label className="block mb-2">Password</label>
              <input
                className="p-3 mb-3 border-emerald-700 border-2 rounded-md w-80 h-12 md:w-96 focus:outline-none"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
              />
            </div>

            <div>
              <button
                type="submit"
                className="block w-80 h-12 border-none bg-emerald-700 text-neutral-700 my-3 rounded-lg hover:bg-emerald-900 hover:text-neutral-900 md:w-96"
              >
                Submit
              </button>
            </div>

            <div>
              <button
                onClick={demoLogin}
                className="block w-80 h-12 border-none bg-emerald-700 text-neutral-700 my-3 rounded-lg hover:bg-emerald-900 hover:text-neutral-900 md:w-96"
              >
                Demo Login
              </button>
            </div>
            <div className="text-emerald-700">
              {isRegister ? (
                <p className="text-black text-lg text-center mt-3">
                  Already A Member?&nbsp;
                  <button
                    onClick={(e) => registerSwap(e)}
                    className="text-teal-700 hover:text-teal-900"
                  >
                    {" "}
                    Login
                  </button>
                </p>
              ) : (
                <p className="text-black text-lg text-center mt-3">
                  Not A Member Yet?&nbsp;
                  <button
                    onClick={(e) => registerSwap(e)}
                    className="text-teal-700 hover:text-teal-900"
                  >
                    Register
                  </button>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
