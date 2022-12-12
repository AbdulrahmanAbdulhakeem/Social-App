import React from "react";
import { useState } from "react";
import { FaCamera, FaEdit } from "react-icons/fa";

function CommentCreator() {
  const [comment, setComment] = useState("");

  const onSubmit = () => {};
  const onChange = () => {};

  return (
    <div>
      <div className="border-emerald-900 w-11/12">
        <div className="container flex flex-col bg-white mx-5 mt-5 leading-7 rounded-xl">
          <form onSubmit={onSubmit} encType="multipart/form-data">
            <input
              className="m-3 p-3 mb-3 border-emerald-700 border-2 rounded-md w-11/12 h-16 md: focus:outline-none"
              type="text"
              id="comment"
              name="comment"
              placeholder="Create Comment"
              value={comment}
              onChange={onChange}
            />
            <button
              type="submit"
              className="m-3  px-3 flex items-center justify-center w-36 h-12 border-none bg-emerald-700 text-neutral-700 my-3 transition duration-300 hover:bg-emerald-900 hover:text-white md:w-32"
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
