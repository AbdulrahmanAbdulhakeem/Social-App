import {createSlice} from 'react-redux'

const user = localStorage.getItem('user')

const initialState = {
    user: user ? user :null,
    isSucces:false,
    isLoading:false,
    isError:false,
    message:''
}