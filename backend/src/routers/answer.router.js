const express = require("express");
const answerRouter = express.Router();
const answerController = require("../controllers/answer.controller.js");

// Get All Question
answerRouter.get("/", answerController.getAllAnswer);

module.exports = answerRouter;
