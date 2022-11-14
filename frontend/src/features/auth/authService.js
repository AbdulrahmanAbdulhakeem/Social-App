import axios from 'axios'

const API_URL = "http://localhost:5000/api/v1/user/"

//Register User
export const register = async(userData) => {
    const {data} = await axios.post(API_URL + 'register' , userData)

    if(data) {
        localStorage.setItem('user',JSON.stringify(data))
    }

    return data
}

//Login User
export const login = async(userData) => {
    const {data} = await axios.post(API_URL + 'login' , userData)

    if(data) {
        localStorage.setItem('user' , JSON.stringify(data))
    }

    return data
}

//Logout User
export const logout = () => {}

const authService = {
    register,
    login,
    logout
}

export default authService