const mongoose = require('mongoose')
const {StatusCodes} = require('http-status-codes')
const { BadRequestError, UnAuthenticatedError } = require('../errors')
const Post = require('../models/PostModel')

const updateComment = async(req,res) => {
    res.send('Updated')
}

const likeComment = async(req,res) => {
    res.send('Like Comment')
}

const deleteComment = async(req,res) => {
    const {
        params:{post_id,comment_id},
        user:{id:userId}
    } = req
    
    const post = await Post.findById(post_id)

    const comment = post.comments.find((comment) => comment._id.toString() === comment_id)

    if(!comment) {
        throw new BadRequestError('Comment Does Not Exist Or Has Been Deleted')
    }

    if(comment.createdBy.toString() !== userId) {
        throw new UnAuthenticatedError('UnAuthorized')
    }

    post.comments = post.comments.filter(({id}) => id !== comment_id)

    await post.save()
    
    res.status(StatusCodes.OK).json(post.comments)
}

module.exports = {
    updateComment,
    likeComment,
    deleteComment
}