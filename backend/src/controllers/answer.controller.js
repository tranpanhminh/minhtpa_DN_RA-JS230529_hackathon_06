const connectMySQL = require("../configs/db.config.js");

class AnswerController {
  async getAllAnswer(req, res) {
    try {
      const listUsers = await usersModel.findAll(); // include: <Tên bảng>
      res.status(200).json(listUsers);
      console.log(listUsers, "AAAAAA");
    } catch (error) {
      console.log(error, "ERROR");
    }
  }
  //   async getUserDetail() {
  //     try {
  //       const result = await userServices.getUserDetailProfile(req, params, id);
  //       res.json(result);
  //     } catch (error) {
  //       console.log(error, "ERROR");
  //     }
  //   }
}
module.exports = new AnswerController();
