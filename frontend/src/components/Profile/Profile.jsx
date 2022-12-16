import profilePic from "../../assets/blank-pic.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaUserAlt, FaEdit } from "react-icons/fa";
import Updateprofile from "./Updateprofile";


function Profile() {
  const [editProfile, setEditProfile] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const updateProfile = (e) => {
    e.preventDefault();
    setEditProfile((edit) => !edit);
  };

  return (
    <div>
      {!editProfile && (
        <div className="flex flex-col bg-white mt-5 mx-5 leading-7 rounded-xl md:w-96">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-normal mt-5">My Profile</h1>
            {user?.imageUrl ? (
              <img src={user.imageUrl} alt="profilePic" className="profile-img" />
            ) : (
              <img src={profilePic} alt="Profile Pic" className="profile-img" />
            )}

          </div>
          <div className="flex items-center mx-5 gap-2 my-5 mb-10">
            <FaUserAlt className="rounded-lg p-1 text-emerald-800 ml-2 bg-slate-300 h-6 w-6" />
            <h2 className="ml-1 mx-16 text-lg">{user && user.name}</h2>
          </div>
          <div className="flex items-center mx-5 mb-10 gap-2">
            <AiOutlineMail className="rounded-lg p-1 text-emerald-800 ml-2 bg-slate-300 h-6 w-6" />
            <h2 className="ml-1 mx-5 text-lg">{user && user.email}</h2>
          </div>
          <div>
            <button
              onClick={updateProfile}
              className="flex items-center justify-center w-60 h-12 border-none bg-emerald-700 text-neutral-700 my-3 rounded-lg transition duration-300 hover:bg-emerald-900 hover:text-white md:w-80 mx-auto"
            >
              Update Profile <FaEdit className="ml-4" />
            </button>
          </div>
        </div>
      )}
      {editProfile && <Updateprofile setEditProfile={setEditProfile} />}
    </div>
  );
}

export default Profile;
