import express from "express";
import { addToCart, updateCart, getCartItems, deleteCartItem } from "../controllers/cartController.js";
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();

router.get("/", requireAuth, getCartItems);
router.post("/", requireAuth, addToCart);
router.patch("/:id", requireAuth, updateCart);
router.delete("/:id", requireAuth, deleteCartItem);

export default router;
