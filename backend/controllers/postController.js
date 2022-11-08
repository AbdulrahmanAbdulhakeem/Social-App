
const getAllPost = async(req,res) => {
    res.send('All Posts')
}

const getPost = async(req,res) => {
    res.send('Request Post')
}

const createPost = async(req,res) => {
    res.send('Create Post')
}

const updatePost = async(req,res) => {
    res.send('Update Post')
}

const deletePost = async(req,res) => {
    res.send('Deleted Post')
}

const likePost = async(req,res) => {
    res.send('Liked Post')
}

const commentPost = async(req,res) => {
    res.send('Commented Post')
}

module.exports - {
    getAllPost,
    getPost,
    createPost,
    updatePost,
    deletePost,
    likePost,
    commentPost
}