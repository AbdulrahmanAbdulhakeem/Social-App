import React,{ useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {useSelector,useDispatch} from 'react-redux'
import { toast } from "react-toastify";
import {Profile,Header} from "../components"
import PostSection from "./PostSection";
import { getAllPosts } from "../features/posts/postSlice";

export const DataContext = React.createContext();

function Home() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {user} = useSelector((state) => state.auth)
  const { posts, isError } = useSelector(
    (state) => state.post
  );

  useEffect(() => {
    if (isError) {
      toast('Try Again');
    }

    if(!user){
      navigate('/register')
    }

  
    dispatch(getAllPosts());  
  }, []);

  return (
    <DataContext.Provider value={{posts}}>
    <div>
      <Header />
      <div className="flex flex-col md:flex-row">
      <Profile />
      <PostSection />
      </div>
    </div>
    </DataContext.Provider>
  )
}

export default Home