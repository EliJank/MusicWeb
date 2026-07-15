import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  user: { type: String, required: true },
  text: { type: String, required: true },
  likes: { type: Number, default: 0},
}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);

export default Post;
