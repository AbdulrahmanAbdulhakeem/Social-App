import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {useSelector} from 'react-redux'
import Header from "../components/Header"

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
    </div>
  )
}

export default Home