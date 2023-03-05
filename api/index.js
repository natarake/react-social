import express from "express";
import mongoose from "mongoose";
import "dotenv/config.js";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import userRoute from "./routes/userRoutes.js";
import authRoute from "./routes/authRoutes.js";

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB is connected"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(8000,()=>{
    console.log("server is running")
})