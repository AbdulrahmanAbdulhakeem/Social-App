import { useEffect } from "react";
import { PostCreator, Posts, Spinner } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllPosts, reset } from "../features/posts/postSlice";

function PostSection() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { post, isLoading, isError, message } = useSelector(
    (state) => state.post
  );

  // useEffect(() => {
  //   if (isError) {
  //     console.log(message);
  //   }

  //   if (!user) {
  //     navigate("/register");
  //   }

  //   dispatch(getAllPosts());

  //   return () => {
  //     dispatch(reset());
  //   };
  // }, []);

  // if (isLoading) {
  //   return <Spinner />;
  // }

  return (
    <div className="w-screen">
      <PostCreator />
      <Posts />
    </div>
  );
}

export default PostSection;
