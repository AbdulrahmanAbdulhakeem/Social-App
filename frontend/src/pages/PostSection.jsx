import { PostCreator, Posts } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PostSection() {
  return (
    <div className="w-screen">
      <PostCreator />
      <Posts />
    </div>
  );
}

export default PostSection;
