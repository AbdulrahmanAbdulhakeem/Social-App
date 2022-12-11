import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import postService from './postService'

const initialState = {
    posts:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}

export const createPost = createAsyncThunk('post/create' , async(postData,thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await postService.createPost(postData,token)
    } catch (error) {
        const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

export const getAllPosts = createAsyncThunk('post/getAll' , async(_,thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await postService.getAllPosts(token)
    } catch (error) {
        const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

export const likePost = createAsyncThunk('post/like' , async(id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        console.log(token)
        return await postService.likePost(id , token)   
    } catch (error) {
        const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
        return thunkAPI.rejectWithValue(message)   
    }
})

export const postSlice = createSlice({
    name:'post',
    initialState,
    reducers:{
        reset:(state) => initialState
    },
    extraReducers:(builder) => {
        builder
        .addCase(createPost.pending,(state) => {
            state.isLoading = true
        }) 
        .addCase(createPost.fulfilled, (state,action) => {
            state.isLoading = false
            state.isSuccess = true
            state.posts.unshift(action.payload)
        })
        .addCase(createPost.rejected,(state,action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getAllPosts.pending,(state) => {
            state.isLoading = true
        }) 
        .addCase(getAllPosts.fulfilled, (state,action) => {
            state.isLoading = false
            state.isSuccess = true
            state.posts = action.payload
        })
        .addCase(getAllPosts.rejected,(state,action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(likePost.pending,(state) => {
            state.isLoading = true
        }) 
        .addCase(likePost.fulfilled, (state,action) => {
            state.isLoading = false
            state.isSuccess = true
            state.posts = action.payload
        })
        .addCase(likePost.rejected,(state,action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const {reset} = postSlice.actions
export default postSlice.reducer