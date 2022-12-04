const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

const postSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    post: {
      type: String,
      required: true,
      minlength: 3,
    },
    imageUrl: {
      type: String,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    comments: [
      {
        type: commentSchema,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
module.exports = mongoose.model("Post", postSchema);
