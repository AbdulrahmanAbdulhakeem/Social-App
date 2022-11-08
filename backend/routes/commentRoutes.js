const express = require("express");
const router = express.Router();

const {
  updateComment,
  likeComment,
  deleteComment,
} = require("../controllers/commentController");

router
  .route("/:id")
  .patch(updateComment)
  .patch(likeComment)
  .delete(deleteComment);
