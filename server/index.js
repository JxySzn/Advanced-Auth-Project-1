import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./db/connectDb.js";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// allows us to parse incoming request payload
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDb();
  console.log("Server is running on port: ", PORT);
});
