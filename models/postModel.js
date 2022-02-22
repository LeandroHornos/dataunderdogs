// Schema de un posteo
import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    pitch: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    creation_date: {
      type: Date,
      default: Date.now,
      required: true,
    },
    last_edit: {
      type: Date,
      default: Date.now,
      required: true,
    },
    user_id: {
      type: mongoose.Types.ObjectId,
      ref: "users",
      required: true,
    },
    upvotes: {
      type: Number,
      default: 0,
      required: true,
    },
    downvotes: {
      type: Number,
      default: 0,
      required: true,
    },
    views : {
      type: Number,
      default: 0,
      required: true,
    },
  },
  { timestamps: true }
);

let Post = mongoose.models.post || mongoose.model("post", postSchema);

export default Post;
