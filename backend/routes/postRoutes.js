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
  .patch(likePost)
  .post(createComment)
  .get(getComments);

module.exports = router