import {
  getAllMerch,
  getMerchById,
  createMerch,
  updateMerch,
  deleteMerch,
} from "../controllers/merchController.js";
import express from "express";

const router = express.Router();

router.get("/", getAllMerch);
router.get("/:id", getMerchById);
router.post("/", createMerch);
router.patch("/:id", updateMerch);
router.delete("/:id", deleteMerch);

export default router;
