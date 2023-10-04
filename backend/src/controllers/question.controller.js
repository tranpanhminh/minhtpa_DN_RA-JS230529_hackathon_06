const connectMySQL = require("../configs/db.config.js");

class QuestionController {
  // Get All Category
  async getAllQuestion(req, res) {
    connectMySQL.query("SELECT * FROM question", function (err, data, fields) {
      if (err) return res.status(200).json({ msg: "Error" });
      return res.status(200).json(data);
    });
  }

  // Get Category Detail
  async getQuestionDetail(req, res) {
    const questionId = req.params.questionId;
    console.log(questionId, "question ID");
    connectMySQL.query(
      "SELECT * FROM question WHERE id = ?",
      [questionId],
      function (err, data, fields) {
        if (err) return res.status(200).json({ msg: "Error" });
        if (data.length === 0) {
          return res.status(404).json({ message: "Question Id Not Found" });
        } else {
          return res.status(200).json(data);
        }
      }
    );
  }

  // Get QuestionAndAnswer
  async getQuestionAndAnswer(req, res) {
    const questionId = req.params.questionId;
    console.log(questionId, "question ID");
    connectMySQL.query(
      "SELECT * FROM answer WHERE question_id = ?",
      [questionId],
      function (err, data, fields) {
        if (err) return res.status(200).json({ msg: "Error" });
        if (data.length === 0) {
          return res.status(404).json({ message: "Question Id Not Found" });
        } else {
          return res.status(200).json(data);
        }
      }
    );
  }

  // Add Question
  async addQuestion(req, res) {
    const questionInfo = req.body;
    if (!questionInfo) {
      return res.status(404).json({ message: "Not Accepted Content" });
    }

    const newQuestion = [
      Number(questionInfo.category_id),
      questionInfo.created_at,
      questionInfo.content,
      Number(questionInfo.level),
    ];
    console.log(newQuestion, "NEW QUÉTION");
    connectMySQL.query(
      `INSERT INTO question(category_id, created_at, content, level) VALUES(?,?,?,?)`,
      newQuestion,
      function (err, data, fields) {
        if (err) return res.status(200).json({ msg: "Error" });
        res.status(200).json({ message: "Question Added" });
      }
    );
  }

  // Get Question By Category And Difficult
  async getQuestionByCategory(req, res) {
    const query = req.query;
    connectMySQL.query(
      `SELECT question.category_id, 
      question.content AS "question", 
      answer.content AS "answer", 
      answer.is_answer AS "check", 
      question.level FROM question LEFT JOIN answer
      ON question.id = answer.question_id
      WHERE category_id = ? AND level = ? LIMIT ?;`,
      [Number(query.category), Number(query.level), Number(query.limit)],
      function (err, data, fields) {
        if (err) return res.status(200).json({ msg: "Error" });
        if (data.length === 0) {
          return res.status(404).json({ message: "Question Id Not Found" });
        } else {
          return res.status(200).json(data);
        }
      }
    );
  }
}
module.exports = new QuestionController();
