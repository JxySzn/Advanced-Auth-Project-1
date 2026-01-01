import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./db/connectDb.js";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  connectDb();
  console.log("Server is running on port 3000");
});
