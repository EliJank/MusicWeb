import {
  getAllMerch,
  getMerchById,
  createMerch,
  updateMerch,
  deleteMerch,
} from "../controllers/merchController.js";
import express from "express";
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();

router.get("/", getAllMerch);
router.get("/:id", getMerchById);
router.post("/create", requireAuth, createMerch);
router.patch("/:id", updateMerch);
router.delete("/:id", deleteMerch);

export default router;
