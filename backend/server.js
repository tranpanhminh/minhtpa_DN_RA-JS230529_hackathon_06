const express = require("express");
const cors = require("cors");
const connectMySQL = require("./src/configs/db.config.js");
const app = express();
const port = process.env.PORT || 5000;
const Router = require("./src/routers/index.js");
require("dotenv").config();

// MiddleWare
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
Router(app);
app.all("*", (req, res, next) => {
  res.status(404).json({ message: "Page Not Found" });
});

// =====================================================
// app.listen(port, async () => {
//   try {
//     await connectMySQL.authenticate();
//     console.log(`Listening to http://localhost:${port}`);
//   } catch (error) {
//     console.error("Server error:", error);
//   }
// });

app.listen(port, () => {
  console.log(`Example app listening on app http://localhost:${port}`);
});
