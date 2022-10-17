const express = require("express");
const router = express.Router();

const userModel = require("../model/userModel");
const likeModel = require("../model/MOdel");
const mongoose = require("mongoose");

router.get("/", async (req, res) => {
  const user = await userModel.find();
  res.json({
    message: "created",
    data: user,
  });
});

router.post("/create", async (req, res) => {
  // const { name } = req.body.name;
  const user = await userModel.create(req.body);
  res.json({
    message: "created",
    data: user,
  });
});

router.post("/:id/like", async (req, res) => {
  const id = req.params.id;
  const getuser = await userModel.findById(id);
  const createLike = await likeModel.findById({ id });

  createLike.user = getuser;
  createLike.save();

  getuser.like.push(mongoose.Types.ObjectId(createLike._id));
  getuser.save();

  res.json({
    message: "like",
    data: createLike,
  });
});
// router.get("/",async (req,res)=>{
//   const user = await userModel.find()
//   res.json({
//     message:"created",
//     data:user
//   })
// })
module.exports = router;
