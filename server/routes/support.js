import express from "express";

import supportPost from "../controllers/supportController.js";

const router = express.Router();

router.post("/", supportPost);

export default router;
