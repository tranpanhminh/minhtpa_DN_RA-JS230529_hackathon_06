const { Op } = require("sequelize");
const NotesModel = require("../models/notes.model.js");
const connectMySQL = require("../configs/db.config.js");

class NotesController {
  // List All Notes
  async getAllNotes(req, res) {
    try {
      const listNotes = await NotesModel.findAll();
      res.status(200).json(listNotes);
      console.log(listNotes, "LIST Notes");
    } catch (error) {
      res.status(404).json(error);
    }
  }

  // Note Detail
  async getNoteDetail(req, res) {
    try {
      const noteId = req.params.noteId;
      const note = await NotesModel.findOne({
        where: {
          id: noteId,
        },
      });
      if (note) {
        res.status(200).json(note);
      } else {
        // Xử lý trường hợp không tìm thấy Note
        res.status(404).json({ message: "Note not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  // Create Note
  async addNote(req, res) {
    try {
      const newNote = req.body;
      console.log(newNote, "NEW NOTE");
      const addNote = await NotesModel.create(newNote);
      console.log(addNote, "ADD Note");
      res.status(200).json({ message: "Note Added" });
    } catch (error) {
      res.status(404).json(error);
    }
  }

  // Delete Note
  async deleteNote(req, res) {
    try {
      const noteId = req.params.noteId;
      const deleteNote = await NotesModel.destroy({
        where: {
          id: noteId,
        },
      });

      if (deleteNote == 0) {
        res.status(404).json({ message: "Note Not Found" });
      } else {
        res.status(200).json({ message: "Note Deleted" });
      }
      console.log(deleteNote, "deleteNote");
    } catch (error) {
      res.status(404).json(error);
    }
  }

  // Update Note
  async updateNote(req, res) {
    try {
      const noteId = req.params.noteId;
      const noteInfo = req.body;
      console.log(noteId, noteInfo);

      const updatedNote = await NotesModel.update(
        { name: noteInfo.name },
        { where: { id: noteId } }
      );
      console.log(updatedNote, "updatedNote");
      if (updatedNote[0] > 0) {
        res.status(200).json({ message: "Note Updated" });
      } else {
        res.status(404).json({ message: "Note Not Found" });
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new NotesController();
