import React from 'react'
import profilePic from "../../../assets/blank-pic.png";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { FaThumbsUp} from "react-icons/fa";
import { useDispatch } from 'react-redux';


function Comment({comment,post}) {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  
  const { createdBy: userDetails } = post;
  const {comments} = post
  const date = new Date() - new Date(post.createdAt);
  console.log(comment)
  
  const millisToMinutesAndSeconds = (millis) => {
    let minutes = Math.floor(millis / 60000);
    if (minutes <= 1) {
      return `${minutes} minute`;
    }

    if (minutes <= 60) {
      const howLong = `${minutes} minutes`;
      return howLong;
    }
    
    let howLong = `${(minutes / 60).toFixed(0)} hours`;
    
    //For Changing to Hour Format When Its Get To 60 Minutes
    if ((minutes / 60).toFixed(0) === 1) {
      return `${(minutes / 60).toFixed(0)} hour`;
    }
    
      //For Calculating Time Passed
      const dayCalc = (minutes / 60).toFixed(0);
      
      if (dayCalc > 24 && (dayCalc / 24).toFixed(0) === 1) {
        return `${(dayCalc / 24).toFixed(0)} day`;
      }
      
      if (dayCalc > 24) {
        return `${(dayCalc / 24).toFixed(0)} days`;
      }
      
      return howLong;
    };
    
    const currentDate = millisToMinutesAndSeconds(date);

  return (
    <div>
        <div className="flex items-center ml-4">
            {userDetails?.imageUrl ? (
              <img
                src={userDetails.imageUrl}
                alt="profilePic"
                className="avatar-img"
              />
            ) : (
              <img src={profilePic} alt="Profile Pic" className="avatar-img" />
            )}
            <div className="flex flex-col">
              <h6 className="ml-2">{userDetails?.name}</h6>
              <h6 className="ml-2"> Posted {currentDate} ago</h6>
              <hr />
            </div>
            
          </div>
          <div className='ml-5'>
            <p className='text-lg'>{comment.comment}</p>

            <button
            // onClick={() => dispatch(likePost(post._id))}
            className="flex w-20 p-2 items-center mt-5 justify-center border-none gap-2 bg-emerald-700 text-neutral-700 rounded-lg transition duration-300 hover:bg-emerald-900 hover:text-white"
          >
            <FaThumbsUp />
            {comment?.likes?.length}
          </button>
          </div>
          {user?._id === userDetails?._id && (
            <div className="m-10 flex">
              {/* <AiOutlineEdit className="mx-5" onClick={onOpenModal} />
              <Modal open={false} onClose={onCloseModal} center>
                <h2>Simple centered modal</h2>
              </Modal> */}
              {/* <AiFillDelete onClick={() => dispatch(deletePost(post._id))} /> */}
            </div>
          )}
          
        </div>

  )
}

export default Comment