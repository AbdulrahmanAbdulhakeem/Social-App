const Post = require('../models/PostModel')
const {StatusCodes} = require('http-status-codes')
const { BadRequestError, UnAuthenticatedError } = require('../errors')

//@desc GetAllPost
//@route GET /api/v1/post
//access Private
const getAllPost = async(req,res) => {
    const post = await Post.find()
    res.status(StatusCodes.OK).json({post})
}

//@desc GetPost
//@route GET /api/v1/post/:id
//access Private
const getPost = async(req,res) => {
    const {id} = req.params
    const post = await Post.findById(id)
    
    if(!post){
        throw new BadRequestError('Post Does Not Exist Or Has Been Deleted')
    }

    res.status(StatusCodes.OK).json(post)
}

//@desc CreatePost
//@route POST /api/v1/post
//access Private
const createPost = async(req,res) => {
    req.body.createdBy = req.user._id
    const post = await Post.create(req.body)
    console.log(post)
    res.status(StatusCodes.CREATED).json({post})
}

//@desc UpdatePost
//@route PATCH /api/v1/post/:id
//access Private
const updatePost = async(req,res) => {
    const {
        user:{id:userId},
        body:{title,post},
        params:{id:postId}
    } = req

    console.log(req.user)

    if(title === ' ' || post === ' ' || !title || !post){
        throw new BadRequestError('Input Cannot Be Empty')
    }

    let updatedPost = await Post.findById(postId)

    if(!updatedPost) {
        throw new BadRequestError('Post Does Not Exist Or Has Been Deleted')
    }

    if(updatedPost.createdBy.toString() !== userId){
        throw new UnAuthenticatedError('UnAuthorized Access')
    }

    updatedPost = await Post.findByIdAndUpdate(
        {_id:postId},
        req.body,
        {new:true , runValidators:true}
    )

    res.status(StatusCodes.OK).json(updatedPost)
}

//@desc DeletePost
//@route DELETE /api/v1/post/:id
//access Private
const deletePost = async(req,res) => {
    const {
        user:{id:userId},
        params:{id:postId}
    } = req

    const post = await Post.findById(postId)

    if(!post) {
        throw new BadRequestError('Post Does Not Exist Or Has Been Deleted')
    }


    if(post.createdBy.toString() !== userId) {
        throw new UnAuthenticatedError('UnAuthorized Access')
    }


    await post.remove()

    res.status(StatusCodes.OK).send('Deleted')
}

//@desc LikePost
//@route GET /api/v1/post/:id
//access Private
const likePost = async(req,res) => {
    const {
        user:{id:userId},
        params:{id:postId}
    } = req

    const post = await Post.findById(postId)

    if(!post) {
        throw new BadRequestError('Post Does Not Exist Or Has Been Deleted')
    }

    const index = post.likes.map((id) => id.toString())
    
    const operator = index.includes(userId) ? "$pull" : "$addToSet"
    console.log(operator)
    

    const updatedPost = await Post.findByIdAndUpdate(
        {_id:postId},
        {
            [operator]:{
            likes:userId
        }
    },
        {new:true , runValidators:true}
    )
    
    res.status(StatusCodes.OK).json({length:post.likes.length})
}

//@desc CreateComment
//@route GET /api/v1/post/:id
//access Private
const createComment = async(req,res) => {
    const {
        user:{id:userId},
        params:{id:postId}
    } = req

    const createdBy = userId
    const {comment} = req.body

    const post = await Post.findByIdAndUpdate(
        postId,
        {
            $addToSet:{
                comments:{
                    createdBy,
                    comment
                }
            }
        },
        {new:true , runValidators:true}
    )

    console.log(post.comments)
    res.status(StatusCodes.OK).json('Succesfully Added Comment')
}

//@desc GetComments
//@route GET /api/v1/post/:id
//access Private
const getComments = async (req,res) => {
    res.send('All Comments')
}

module.exports = {
    getAllPost,
    getPost,
    createPost,
    updatePost,
    deletePost,
    likePost,
    createComment,
    getComments
}