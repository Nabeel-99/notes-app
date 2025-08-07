import express from "express";
import {
  createNote,
  deleteNote,
  editNote,
  getNoteById,
  getUserNotes,
} from "../controllers/noteController.js";

const router = express.Router();

router.post("/create", createNote);
router.get("/", getUserNotes);
router.get("/:id", getNoteById);
router.patch("/edit/:id", editNote);
router.delete("/:id", deleteNote);

export default router;
