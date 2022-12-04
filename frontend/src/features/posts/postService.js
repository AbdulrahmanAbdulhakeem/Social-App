import axios from "axios";


const API_URL = "http://localhost:5000/api/v1/post/"

//Create New Post
const createPost = (postData,token) => {
    console.log(postData)
    const config  = {
        headers:{
            Authorization:`Bearer ${token}`
        }
    }

    const {data} = axios.post(API_URL,postData,config)
    console.log(data)
    return data
}

const postService = {
    createPost
}
export default postService