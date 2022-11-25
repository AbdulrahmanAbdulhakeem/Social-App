import axios from 'axios'

const API_URL = "http://localhost:5000/api/v1/user/"

//Register User
const register = async(userData) => {
    const {data} = await axios.post(API_URL + 'register' , userData)

    if(data) {
        localStorage.setItem('user',JSON.stringify(data))
    }

    return data
}

//Login User
const login = async(userData) => {
    const {data} = await axios.post(API_URL + 'login' , userData)

    if(data) {
        localStorage.setItem('user' , JSON.stringify(data))
    }

    return data
}

//Update UserProfile
const updateProfile = async(userData,token) => {
    const config = {
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    const {data} = await axios.patch(API_URL + 'profile' , userData , config)
    console.log(data)

    return data
}

//Logout User
const logout = () => {
    localStorage.removeItem('user')
}



const authService = {
    register,
    login,
    updateProfile,
    logout,

}

export default authService