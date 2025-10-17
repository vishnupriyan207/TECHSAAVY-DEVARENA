import express from "express";
import { assignTask } from "../controllers/taskController.js";

const router = express.Router();
router.post("/assign", assignTask);

export default router;
