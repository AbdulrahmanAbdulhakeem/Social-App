import React from "react";
import { useState } from "react";
import { FaCamera, FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { commentOnPost } from "../../features/posts/postSlice";

function CommentCreator({postId}) {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    let commentData = {
        comment,
        postId
    }
    dispatch(commentOnPost(commentData))

    setComment("")
  };

  return (
    <div>
      <div className="border-emerald-900 w-11/12 ">
        <div className="container flex flex-col bg-slate-200 mx-5 mt-5 leading-7 rounded-xl">
          <form onSubmit={onSubmit} encType="multipart/form-data">
            <input
              className="p-3 my-3 ml-3 border-emerald-700 border-2 rounded-md w-11/12 h-16 md: focus:outline-none"
              type="text"
              id="comment"
              name="comment"
              placeholder="Create Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              type="submit"
              className=" px-3 ml-3 flex items-center justify-center w-36 h-12 border-none bg-emerald-700 text-neutral-700 my-3 transition duration-300 hover:bg-emerald-900 hover:text-white md:w-32"
            >
              Comment <FaEdit className="ml-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CommentCreator;
