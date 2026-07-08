import express from "express";

import userController from "../controllers/userController.js";

const router = express.Router();

router.post("/login", userController.loginUser);
router.post("/register", userController.signupUser);
router.get("/profile/:id", userController.getUserProfile);
router.post("/logout", userController.logOutUser);

export default router;