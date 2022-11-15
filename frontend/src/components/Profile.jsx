import profilePic from "../assets/blank-pic.jpeg";

function Profile() {
  return (
    <div>
      <div>
        <div className="h-60 rounded-xl">
          <img src={profilePic} alt="Profile Pic" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
