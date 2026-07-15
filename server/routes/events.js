import express from "express";
import eventsController from '../controllers/eventsController.js';
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();

router.get("/", eventsController.eventsGet);
router.get("/:id", eventsController.eventGetById);
router.post("/create", requireAuth, eventsController.eventPost);
router.delete("/:id", eventsController.eventDelete);
router.patch("/:id", eventsController.eventPatch);

export default router;
