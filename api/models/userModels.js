import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true, max: 50},
    password: { type: String, required: true, min: 6 },
    profilePicture: { type: String, default: "" },
    coverPicture: { type: String, default: "" },
    followers: {type: Array, default: []},
    following: {type: Array, default: []},
    isAdmin: {type: Boolean, default: false},
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);