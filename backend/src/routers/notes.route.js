const express = require("express");
const notesController = require("../controllers/notes.controller.js");
const notesRouter = express.Router();

// Get All notes
notesRouter.get("/", notesController.getAllNotes);

// Get Notes Detail
notesRouter.get("/detail/:noteId", notesController.getNoteDetail);

// Update note
notesRouter.patch("/update/:noteId", notesController.updateNote);

// Create note
notesRouter.post("/add", notesController.addNote);

// Delete note
notesRouter.delete("/delete/:noteId", notesController.deleteNote);

module.exports = notesRouter;
