import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {useSelector} from 'react-redux'
import {Profile,Header} from "../components"

function Home() {
  const navigate = useNavigate()

  const {user} = useSelector((state) => state.auth)

  useEffect(() => {
    if(!user) {
      navigate('/register')
    }
  },[user,navigate])

  return (
    <div>
      <Header />
      <Profile />
    </div>
  )
}

export default Home