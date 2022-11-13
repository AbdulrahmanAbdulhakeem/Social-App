const mongoose = require("mongoose");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnAuthenticatedError } = require("../errors");
const Post = require("../models/PostModel");

//@desc likeComment
//@route PATCH /api/v1/post/:post_id/:comment_id/like
//access Private
const likeComment = async (req, res) => {
  const {
    params: { post_id, comment_id },
    user: { id: userId },
  } = req;

  const post = await Post.findById(post_id);

  if (!post) {
    throw new BadRequestError("Post Does Not Exist Or Has Been Deleted");
  }

  const comment = post.comments.find(
    (comment) => comment._id.toString() === comment_id
  );

  if (!comment) {
    throw new BadRequestError("Comment Does Not Exist Or Has Been Deleted");
  }

  const index = comment.likes.includes(userId);

  if (!index) {
    comment.likes.push(userId);
  } else {
    comment.likes = comment.likes.filter((id) => id === userId);
  }

  const updatedPost = await Post.findByIdAndUpdate(post_id, post, {
    new: true,
    runValidators: true,
  });

  res.status(StatusCodes.OK).json(updatedPost.comments);
};

//@desc deleteComment
//@route DELETE /api/v1/post/:post_id/:comment_id
//access Private
const deleteComment = async (req, res) => {
  const {
    params: { post_id, comment_id },
    user: { id: userId },
  } = req;

  const post = await Post.findById(post_id);

  if (!post) {
    throw new BadRequestError("Post Does Not Exist Or Has Been Deleted");
  }

  const comment = post.comments.find(
    (comment) => comment._id.toString() === comment_id
  );

  if (!comment) {
    throw new BadRequestError("Comment Does Not Exist Or Has Been Deleted");
  }

  if (comment.createdBy.toString() !== userId) {
    throw new UnAuthenticatedError("UnAuthorized");
  }

  post.comments = post.comments.filter(({ id }) => id !== comment_id);

  await post.save();

  res.status(StatusCodes.OK).json(post.comments);
};

module.exports = {
  likeComment,
  deleteComment,
};
