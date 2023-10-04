const connectMySQL = require("../configs/db.config.js");

class CategoryController {
  // Get All Category
  async getAllCategory(req, res) {
    connectMySQL.query("SELECT * FROM category", function (err, data, fields) {
      if (err) return res.status(200).json({ msg: "Error" });
      return res.status(200).json(data);
    });
  }

  // Get Category Detail
  async getCategoryDetail(req, res) {
    const categoryId = req.params.categoryId;
    console.log(categoryId, "CATEGORY ID");
    connectMySQL.query(
      "SELECT * FROM category WHERE id = ?",
      [categoryId],
      function (err, data, fields) {
        if (err) return res.status(200).json({ msg: "Error" });
        if (data.length === 0) {
          return res.status(404).json({ message: "Category Id Not Found" });
        } else {
          return res.status(200).json(data);
        }
      }
    );
  }

  // Get Category Detail
  async addCategory(req, res) {
    const categoryInfo = req.body;
    if (!categoryInfo) {
      return res.status(404).json({ message: "Not Accepted Content" });
    }

    const newCategory = [categoryInfo.name];
    connectMySQL.query(
      `INSERT INTO category (name) VALUES(?)`,
      newCategory,
      function (err, data, fields) {
        if (err) return res.status(200).json({ msg: "Error" });
        res.status(200).json({ message: "Category Added" });
      }
    );
  }
}
module.exports = new CategoryController();
