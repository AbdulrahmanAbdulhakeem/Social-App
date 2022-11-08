const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now(),
        required:true
    }
    
} , {timestamps:true})

const postSchema = new mongoose.Schema({
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    title:{
        type:String,
        required:true,
        minlength:3
    },
    message:{
        type:String,
        required:true,
        minlength:3
    },
    selectedIMG:{
        type:String,
    },
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true
        }
    ],
    comment:[
        {
            type:commentSchema
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now(),
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('Comment' , commentSchema)
module.exports = mongoose.model('Post' , postSchema)