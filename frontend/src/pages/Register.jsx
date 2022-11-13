import e from "cors";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";

function Register() {
  const [register, setRegister] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const onSubmit = () => {};
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(name, email, password);

  return (
    <>
      <div className="container flex flex-col items-center my-10 p-10 bg-white rounded-lg xl:w-1/2 ">
        <h1 className="pt-3 my-3 flex text-emerald-700 text-3xl">
          <FaUserAlt className="mr-3" />
          {register ? "Register" : "Login"}
        </h1>

        <div className="flex text-neutral-700 p-5 bg-white">
          <form onSubmit={onSubmit}>
            {register && (
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
                className="block w-80 h-12 border-none bg-emerald-700 text-neutral-700 my-3 rounded-lg md:w-96"
              >
                Submit
              </button>
            </div>

            <div>
              <button
                type="submit"
                className="block w-80 h-12 border-none bg-emerald-700 text-neutral-700 my-3 rounded-lg md:w-96"
              >
                Demo Login
              </button>
            </div>
            <div className="text-emerald-700">
              {register ? (
                <p className="text-black text-lg text-center mt-3">
                  Already A Member?&nbsp; 
                  <button onClick={(e) => {
                    e.preventDefault()
                    setRegister((reg) => !reg)
                  }}className="text-teal-700"> Login</button>
                </p>
              ) : (
                <p className="text-black text-lg text-center mt-3">
                  Not A Member Yet?&nbsp;
                  <button onClick={(e) => {
                    e.preventDefault()
                    setRegister((reg) => !reg)
                  }} className="text-teal-700">
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
