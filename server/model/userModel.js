const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserModel = new Schema(
  {
    name: {
      type: String,
    },
    like: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "likes",
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("users", UserModel);
