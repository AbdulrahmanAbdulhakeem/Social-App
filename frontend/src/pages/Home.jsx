import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {useSelector,useDispatch} from 'react-redux'
import { toast } from "react-toastify";
import {Profile,Header,PostCreator, Spinner} from "../components"

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {user} = useSelector((state) => state.auth)
  const { posts, isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.post
  );

  useEffect(() => {
    if (isError) {
      toast('Try Again');
    }

    if(!user){
      navigate('/login')
    }

  }, [user, isSuccess, isLoading, isError, message, navigate, dispatch]);

  if(isLoading) {
    return <Spinner />
  }

  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row">
      <Profile />
      <PostCreator />
      </div>
    </div>
  )
}

export default Home