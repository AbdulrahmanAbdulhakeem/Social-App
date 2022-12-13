import React, { useState } from "react";
import Comment from "./Comment/Comment";

const imagePerRow = 5;
function Comments({ post,setViewComment }) {
  const [next, setNext] = useState(imagePerRow);

  const handleMoreComments = () => {
    setNext(next + imagePerRow);
  };

  return (
    <>
      <div className="bg-white p-3">
        <div>
          {post.comments &&
            post?.comments.slice(0, next)?.map((comment) => (
              <div>
                <Comment key={post._id} comment={comment} post={post} />
              </div>
            ))}
        </div>
        <div className="flex">
          {next < post?.comments?.length && (
            <button
              className="flex ml-5 w-36 p-2 mb-3 items-center mt-5 justify-center border-none gap-2 bg-emerald-700 text-neutral-700 rounded-lg transition duration-300 hover:bg-emerald-900 hover:text-white"
              onClick={handleMoreComments}
            >
              Load more
            </button>
          )}

          <button
            className="flex ml-5 w-36 p-2 mb-3 items-center mt-5 justify-center border-none gap-2 bg-emerald-700 text-neutral-700 rounded-lg transition duration-300 hover:bg-emerald-900 hover:text-white"
            // onClick={() => {setViewComment((viewComment) => !viewComment)}}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default Comments;
