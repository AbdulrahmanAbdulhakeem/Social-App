import React, { useState } from "react";
import Comment from "./Comment/Comment";

const imagePerRow = 5;
function Comments({ post }) {
  console.log(post);
  const [next, setNext] = useState(imagePerRow);

  const handleMoreComments = () => {
    setNext(next + imagePerRow);
  };

  return (
    <>
      <div>
        {post.comments &&
          post?.comments.slice(0, next)?.map((comment) => (
            <div>
              <Comment key={post._id} post={post} />
            </div>
          ))}
      </div>
      {next < post?.comments?.length && (
        <button className="mt-4 border-slate-300" onClick={handleMoreComments}>
          Load more
        </button>
      )}
    </>
  );
}

export default Comments;
