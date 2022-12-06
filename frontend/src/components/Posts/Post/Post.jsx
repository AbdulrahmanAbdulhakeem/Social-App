import React from "react";
import profilePic from "../../../assets/blank-pic.png";
import {FaThumbsUp,FaComment} from 'react-icons/fa'

function Post({ posts }) {

    const likePost = () => {}
    const commentOnPost = () => {}

  console.log(posts);
  const { createdBy: user } = posts;
  const date = new Date() - new Date(posts.createdAt)
//   console.log(date )



const millisToMinutesAndSeconds = (millis) => {
    let minutes = Math.floor(millis / 60000);
    if(minutes <= 60){
        const howLong = `${minutes} minutes`
        return howLong
    }

    let howLong = `${(minutes/60).toFixed(0)} hours`

    if((minutes/60).toFixed(0) == 1) {
        return `${(minutes/60).toFixed(0)} hour`        
    }

    return howLong
  }

  const currentDate = millisToMinutesAndSeconds(date)
  console.log(currentDate)

  // console.log(user)
  return (
    <div className="border-emerald-900 w-11/12">
      <div className="container flex flex-col bg-white mx-5 mt-5 leading-7 rounded-xl">
        <div>
          <div className="flex items-center m-5">
            {user.imageUrl ? (
              <img
                src={user.imageUrl}
                alt="profilePic"
                className="avatar-img"
              />
            ) : (
              <img src={profilePic} alt="Profile Pic" className="avatar-img" />
            )}
            <div className="flex flex-col">
              <h6 className="ml-2">{user.name}</h6>
              <h6 className="ml-2">
                {" "}
                Posted {currentDate} ago
              </h6>
              <hr />
            </div>
          </div>
        </div>
        <div className="my-5 mx-5">
          <p>{posts.post}</p>
          {posts.imageUrl && (
            <img src={posts.imageUrl} alt="profilePic" className="m-5" />
          )}
        </div>
        <div className="flex gap-2">
          <button
            onClick={likePost}
            className="flex w-20 p-2 items-center justify-center gap-2 border-none bg-emerald-700 text-neutral-700 my-3 rounded-lg transition duration-300 hover:bg-emerald-900 hover:text-white md:mx-auto">            
            <FaThumbsUp />{posts.likes.length}
          </button>
          <button
            onClick={commentOnPost}
            className="flex w-20 p-2 gap-2 items-center justify-center border-none bg-emerald-700 text-neutral-700 my-3 rounded-lg transition duration-300 hover:bg-emerald-900 hover:text-white md:mx-auto"
          >
            <FaComment />{posts.comments.length}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
