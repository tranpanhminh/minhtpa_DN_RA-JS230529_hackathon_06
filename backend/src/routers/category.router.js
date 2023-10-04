const express = require("express");
const categoryRouter = express.Router();
const categoryController = require("../controllers/category.controller.js");

// Xây dựng một API với phương thức GET cho phép lấy toàn bộ dữ liệu về category
categoryRouter.get("/", categoryController.getAllCategory);

// Xây dựng một API với phương thức GET cho phép lấy một category theo category_id
categoryRouter.get("/detail/:categoryId", categoryController.getCategoryDetail);

// Xây dựng một API với phương thức POST cho phép thêm mới một category
categoryRouter.post("/add", categoryController.addCategory);

module.exports = categoryRouter;
