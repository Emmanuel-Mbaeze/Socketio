const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const likeModel = new Schema(
  {
    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("likes", likeModel);
