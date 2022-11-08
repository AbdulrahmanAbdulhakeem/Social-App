

const updateComment = async(req,res) => {
    res.send('Updated')
}

const likeComment = async(req,res) => {
    res.send('Like Comment')
}

const deleteComment = async(req,res) => {
    res.send('Deleted')
}

module.exports = {
    updateComment,
    likeComment,
    deleteComment
}