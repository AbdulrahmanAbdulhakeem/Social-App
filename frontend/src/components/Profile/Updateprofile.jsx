import profilePic from '../../assets/blank-pic.png'
import {useSelector} from 'react-redux'
import { useState } from 'react'


function Updateprofile() {

    const {user} = useSelector((state) => state.auth)

    const [formData , setFormData] = useState({
        name:user.name,
        email:user.email,
        password:''
    })

    console.log(user)

    const {name,email,password} = formData

    const onSubmit = (e) => {
        e.preventDefault()
    }

    const saveProfile = () => {}

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value,
        }))
    }

    console.log(name,email,password)

  return (
        <div className="container flex flex-col bg-white mt-5 leading-7 w-72 rounded-xl md:w-96">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-normal mt-5">Edit Profile</h1>
          <img src={profilePic} alt="Profile Pic" className="profile-img" />
        </div>
        <div className="flex text-neutral-700 p-5 bg-white">
          <form onSubmit={onSubmit}>
              <div>
                <label className="block mb-2 text-lg">Name</label>
                <input
                  className="p-3 mb-3 border-emerald-700 border-2 rounded-md w-60 h-12 md:w-80 focus:outline-none"
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={onChange}
                />
              </div>

            <div>
              <label className="block mb-2">Email</label>
              <input
                className="p-3 mb-3 border-emerald-700 border-2 rounded-md w-60 h-12 md:w-80 focus:outline-none"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
              />
            </div>

            <div>
              <label className="block mb-2">Password</label>
              <input
                className="p-3 mb-3 border-emerald-700 border-2 rounded-md w-60 h-12 md:w-80 focus:outline-none"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
              />
            </div>
          <button
          onClick={saveProfile}
           className="flex items-center justify-center w-60 h-12 border-none bg-emerald-700 text-neutral-700 my-3 rounded-lg transition duration-300 hover:bg-emerald-900 hover:text-white md:w-80 mx-auto">
            Save Update
          </button>
          </form>
        </div>
      </div>
  )
}

export default Updateprofile