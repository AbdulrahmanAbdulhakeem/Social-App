const express = require("express");
const router = express.Router();

const {
  updateComment,
  likeComment,
  deleteComment,
} = require("../controllers/commentController");

router.route("/:post_id/:comment_id").delete(deleteComment);

router.route("/:post_id/:comment_id/like").patch(likeComment);

module.exports = router;
