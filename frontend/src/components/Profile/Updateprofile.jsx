import profilePic from "../../assets/blank-pic.png";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logout, reset, updateProfile } from "../../features/auth/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Updateprofile({ setEditProfile }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: user?.name,
    email: user?.email,
    password: "",
    photo: "",
  });

  const { name, email, password, photo } = formData;

  const onSubmit = async(e) => {
    e.preventDefault();
    setEditProfile((edit) => !edit);
    const formData = new FormData()
    formData.append('name' , name)
    formData.append('email' , email)
    formData.append('password' , password)
    formData.append('photo' ,photo )
    // let userData = {
    //   name,
    //   email,
    //   password,
    //   photo
    // }

    
    dispatch(updateProfile(formData))
    navigate('/')
    toast('Re-Login With Your Updated Details')
    dispatch(logout())
    dispatch(reset())
  };
  

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  
  const handlePhoto = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      photo: e.target.files[0],
    }));
  };
  
  return (
    <div className="container flex flex-col bg-white mt-5 leading-7 w-72 rounded-xl md:w-96">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-normal mt-5">Edit Profile</h1>
        {user.photo ? (
              <img src={user.photo} alt="profilePic" className="profile-img" />
            ) : (
              <img src={profilePic} alt="Profile Pic" className="profile-img" />
            )}
      </div>
      <div className="flex text-neutral-700 p-5 bg-white overflow-hidden">
        <form onSubmit={onSubmit} encType="multipart/form-data">
          <div>
          <label className="block my-2 text-lg">Update Pic</label>
            <input
              className="file-btn"
              type="file"
              accept=".png, .jpg, .jpeg"
              name="photo"
              onChange={handlePhoto}
            />
            <label className="block my-2 text-lg">Name</label>
            <input
              className="p-3 mb-3 border-emerald-700 border-2 rounded-md w-60 h-12 md:w-80 focus:outline-none"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={onChange}
            />
          </div>

          <div>
            <label className="block mb-2">Email</label>
            <input
              className="p-3 mb-3 border-emerald-700 border-2 rounded-md w-60 h-12 md:w-80 focus:outline-none"
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
              className="p-3 mb-3 border-emerald-700 border-2 rounded-md w-60 h-12 md:w-80 focus:outline-none"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-60 h-12 border-none bg-emerald-700 text-neutral-700 my-3 rounded-lg transition duration-300 hover:bg-emerald-900 hover:text-white md:w-80 mx-auto"
          >
            Save Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Updateprofile;
