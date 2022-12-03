import { useState } from "react";
import { FaCamera,FaEdit } from "react-icons/fa";

function PostCreator() {
  const onSubmit = () => {};

  const [formData, setFormData] = useState({
    post: "",
    image: "",
  });

  const { post, image } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePhoto = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      image: e.target.files[0],
    }));
  };

  return (
    <div className="border-emerald-900 md:w-2/4">
      <div className="container flex flex-col bg-white mx-5 mt-5 leading-7 rounded-xl md:">
        <form onSubmit={onSubmit} encType="multipart/form-data">
          <input
            className="m-3 p-3 mb-3 border-emerald-700 border-2 rounded-md w-96 h-16 md:w-11/12 focus:outline-none"
            type="text"
            id="post"
            name="post"
            placeholder="Create Post"
            value={post}
            onChange={onChange}
          />

          <div className="flex items-center">
          <div className="mx-5">
            <label htmlFor="image" className="block my-2">
              <FaCamera className="h-6 w-6" />
            </label>
            <input
              id="image"
              className="file-btn "
              type="file"
              accept=".png, .jpg, .jpeg"
              name="image"
              onChange={handlePhoto}
            />
          </div>
          <div>
            <button
              type="submit"
              className="flex items-center justify-center w-28 h-12 border-none bg-emerald-700 text-neutral-700 my-3 transition duration-300 hover:bg-emerald-900 hover:text-white md:w-32 mx-auto"
            >
              Post <FaEdit className="ml-4" />
            </button>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostCreator;