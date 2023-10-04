const express = require("express");
const categoryRouter = require("../routers/category.router.js");
const questionRouter = require("../routers/question.router.js");
const answerRouter = require("../routers/answer.router.js");
express.Router();
function Router(app) {
  //   // Homepage
  //   app.get("/", (req, res) => {
  //     res.status(200).json({ message: "Welcome to Homepage" });
  //   });
  // Api All Users
  app.use("/api/category", categoryRouter);
  // Api All Products
  app.use("/api/question", questionRouter);
  // Api All Products
  app.use("/api/answer", answerRouter);
}
module.exports = Router;
