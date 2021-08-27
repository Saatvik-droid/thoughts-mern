import { Router } from "express";

import {
  getThoughts,
  createThought,
  updateThought,
  likeThought,
  deleteThought,
} from "../controllers/thoughts.js";
import auth from "../middleware/auth.js";

const router = Router();

router.get("/", auth, getThoughts);
router.post("/", auth, createThought);
router.patch("/:id", auth, updateThought);
router.post("/like/:id", auth, likeThought);
router.delete("/:id", auth, deleteThought);

export default router;
