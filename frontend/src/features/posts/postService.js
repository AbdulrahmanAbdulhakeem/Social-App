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
    const config  = {
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    
    const {data} = await axios.get(API_URL,config)
    return data
}

//Like Post 
const likePost = async(postId , token) => {
    const config  = {
        headers:{
            Authorization:`Bearer ${token}`
        }
    }

    const {data} = await axios.patch(API_URL + 'like/' + postId ,{params:{id:postId}}, config)
    console.log(data)

    return data
}

const postService = {
    createPost,
    getAllPosts,
    likePost,
}
export default postService