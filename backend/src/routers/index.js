const express = require("express");
const notesRouter = require("./notes.route.js");

express.Router();
function Router(app) {
  // Api All Notes
  app.use("/api/notes", notesRouter);
}
module.exports = Router;
