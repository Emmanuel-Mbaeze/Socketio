const mongoose = require("mongoose");
require("dotenv").config();
const url =
  "mongodb+srv://Emmanuel:123456789Somto@cluster0.firhs.mongodb.net/i--jot?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => {
    console.log("database is now connected...!");
  })
  .catch(() => {
    console.log("Connection failed");
  });

module.exports = mongoose;
