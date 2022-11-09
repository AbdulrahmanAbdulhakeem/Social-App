
//@desc GetAllPost
//@route GET /api/v1/post
//access Private
const getAllPost = async(req,res) => {
    res.send('All Posts')
}

//@desc GetPost
//@route GET /api/v1/post/:id
//access Private
const getPost = async(req,res) => {
    res.send('Request Post')
}

//@desc CreatePost
//@route POST /api/v1/post
//access Private
const createPost = async(req,res) => {
    res.send('Create Post')
}

//@desc UpdatePost
//@route PATCH /api/v1/post/:id
//access Private
const updatePost = async(req,res) => {
    res.send('Update Post')
}

//@desc DeletePost
//@route DELETE /api/v1/post/:id
//access Private
const deletePost = async(req,res) => {
    res.send('Deleted Post')
}

//@desc LikePost
//@route GET /api/v1/post/:id
//access Private
const likePost = async(req,res) => {
    res.send('Liked Post')
}

//@desc CreateComment
//@route GET /api/v1/post/:id
//access Private
const createComment = async(req,res) => {
    res.send('Commented Post')
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