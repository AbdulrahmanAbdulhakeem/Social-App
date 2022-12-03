import profilePic from "../../assets/blank-pic.png";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logout, reset, updateProfile } from "../../features/auth/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

function Updateprofile({ setEditProfile }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: user?.name,
    email: user?.email,
    password: "",
    image: "",
  });

  const { name, email, password, image } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    setEditProfile((edit) => !edit);

    let imageUrl;

    if (image) {
      const formData = new FormData();
      formData.append("image", image);

      const { data } = await axios({
        method: "post",
        url: "https://api.imgbb.com/1/upload?key=28c18729cdee049636035b7dc7a63ea3",
        data: formData,
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      imageUrl = data.data.url;

      let userData = {
        name,
        email,
        imageUrl,
      };
      dispatch(updateProfile(userData));
    }

    console.log(imageUrl);

    let userData = {
      name,
      email,
    };

    console.log(userData);

    dispatch(updateProfile(userData));
    // dispatch(logout())
    // dispatch(reset())
    toast("Updating...");
    toast("It Is Advisable To Re-Login");
    // navigate('/')
  };

  const onStopUpdate = (e) => {
    e.preventDefault();
    setEditProfile((edit) => !edit);
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePhoto = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      image: e.target.files[0],
    }));
  };

  return (
    <div className="flex flex-col bg-white mt-5 mx-5 leading-7 w-72 rounded-xl md:w-96">
      <div className="flex flex-col items-center">
        
        <h1 className="text-3xl font-normal mt-5">Edit Profile</h1>
        {user.imageUrl ? (
          <img src={user.imageUrl} alt="profilePic" className="profile-img" />
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
              name="image"
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

          {/* <div>
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
          </div> */}
          <button
            type="submit"
            className="w-60 h-12 border-none bg-emerald-700 text-neutral-700 my-3 rounded-lg transition duration-300 hover:bg-emerald-900 hover:text-white md:w-80 mx-auto"
          >
            Save Update
          </button>
          <button
              onClick={onStopUpdate}
              className="flex items-center justify-center w-60 h-12 border-none bg-emerald-700 text-neutral-700 my-3 rounded-lg transition duration-300 hover:bg-emerald-900 hover:text-white md:w-80 mx-auto"
            >
              Abort Profile
            </button>
        </form>
      </div>
    </div>
  );
}

export default Updateprofile;
