import Post from "../models/postModel.js";

const postsGet =
  ("/",
  async (req, res) => {
    console.log("veikia");
    const allPosts = await Post.find({});
    res.json(allPosts);
  });

const postCreate =
  ("/create",
  async (req, res) => {
    const {
    user,
    text,
    likes
    } = req.body;
    try {
      const newPost = await Post.create({
       user: req.user.name,
       text,
       likes
      });
      res.status(201).json(newPost);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });


const postDelete =
  ("/:id",
  async (req, res) => {
    const { id } = req.params;
    const post = await Post.findByIdAndDelete(id);
    if (!post) return res.status(404).json({ error: "post is not found" });
    res.status(200).json(post);
  });

const postEdit =
  ("/:id",
  async (req, res) => {
    const { id } = req.params;
    const post = await Post.findByIdAndUpdate(id, req.body, { new: true });
    if (!post) return res.status(404).json({ error: "post is not found" });
    res.status(200).json(post);
  });

  const likePost = async (req, res) => {
  try {
     const { id } = req.params;
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({
        message: "Post is not found"
      });
    }

    post.likes += 1;

    await post.save();

    res.json(post);
    console.log("Likes", post.likes);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

  export default { postsGet, postCreate, postDelete, postEdit, likePost };
