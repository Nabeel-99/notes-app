import Note from "../models/note.js";

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    console.log("logging from create note function req.body", req.body);
    await Note.create({
      title,
      content,
    });
    return res.status(200).json({ message: "Note created successfully" });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getUserNotes = async (req, res) => {
  try {
    const userNotes = await Note.find({});
    if (userNotes.length === 0) {
      return res.status(404).json({ message: "No notes found" });
    }
    return res.status(200).json(userNotes);
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const editNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    const updatedNote = await Note.findByIdAndUpdate(id, {
      title,
      content,
    });
    return res.status(200).json(updatedNote);
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findByIdAndDelete(id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    return res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;

    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    return res.status(200).json(note);
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
