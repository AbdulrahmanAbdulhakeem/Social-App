const express = require("express");
const router = express.Router();
const {
  getAllPost,
  getPost,
  createPost,
  updatePost,
  deletePost,
  likePost,
  createComment,
  getComments
} = require("../controllers/postController");

router.route("/").get(getAllPost).post(createPost);

router
  .route("/:id")
  .get(getPost)
  .patch(updatePost)
  .delete(deletePost)

router.route('/like/:id').patch(likePost)
router.route('/comment/:id').post(createComment).get(getComments);


module.exports = router