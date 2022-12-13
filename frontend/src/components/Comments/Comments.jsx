import React, { useState } from "react";
import Comment from "./Comment/Comment";

const imagePerRow = 5;
function Comments({ post }) {
  const [next, setNext] = useState(imagePerRow);

  const handleMoreComments = () => {
    setNext(next + imagePerRow);
  };

  return (
    <>
      <div className="bg-white">
      <div>
        {post.comments &&
          post?.comments.slice(0, next)?.map((comment) => (
            <div>
              <Comment key={post._id} comment={comment} post = {post} />
            </div>
          ))}
      </div>
      {next < post?.comments?.length && (
        <button className="border-slate-300" onClick={handleMoreComments}>
          Load more
        </button>
      )}
      </div>
    </>
  );
}

export default Comments;
