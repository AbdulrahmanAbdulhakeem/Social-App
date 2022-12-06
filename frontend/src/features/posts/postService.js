import axios from "axios";


const API_URL = "http://localhost:5000/api/v1/post/"

//Create New Post
const createPost = async(postData,token) => {
    // console.log(postData)
    const config  = {
        headers:{
            Authorization:`Bearer ${token}`
        }
    }

    const {data} = await axios.post(API_URL,postData,config)
    console.log(data)
    return data
}

//Get All Post
const getAllPosts = async(token) => {
    // console.log(postData)
    const config  = {
        headers:{
            Authorization:`Bearer ${token}`
        }
    }

    const {data} = await axios.get(API_URL,config)
    console.log(data)
    return data
}

const postService = {
    createPost,
    getAllPosts,
}
export default postService