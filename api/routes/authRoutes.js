import express from "express";
import User from "../models/userModels.js";
const router = express.Router();

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const user = await newUser.save();
    res.status(200).json();
  } catch (error) {
    console.log(error)
  }
});

export default router;