import express from "express";
import postController from "../controllers/postController.js";
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();

router.get("/", requireAuth, postController.postsGet);
router.patch("/:id", requireAuth, postController.postEdit);
router.post("/create", requireAuth, postController.postCreate);
router.delete("/:id", requireAuth, postController.postDelete);
router.patch("/:id/like", requireAuth, postController.likePost);

export default router;
