const express = require("express");
const questionRouter = express.Router();
const questionController = require("../controllers/question.controller.js");

// Xây dựng một API với phương thức GET cho phép lấy về toàn bộ questions
questionRouter.get("/", questionController.getAllQuestion);

// Xây dựng một API với phương thức GET cho phép lấy một question theo question_id
questionRouter.get("/detail/:questionId", questionController.getQuestionDetail);

// Xây dựng một API với phương thức GET cho phép lấy về một question với toàn bộ answers của question đó
questionRouter.get(
  "/:questionId/answer",
  questionController.getQuestionAndAnswer
);

// Xây dựng một API với phương thức GET cho phép lấy về toàn bộ questions theo các tiêu chí lọc là category, level, limit (Số lượng câu hỏi muốn lấy về)
questionRouter.get("/filter", questionController.getQuestionByCategory);

// Xây dựng một API với phương thức POST cho phép thêm mới một question
questionRouter.post("/add", questionController.addQuestion);

module.exports = questionRouter;
