import { User } from "../models/userModel.js";
import bycryptjs from "bycryptjs";

export const signup = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    if (!email || !password || !name) {
      throw new Error("All fields are required");
    }
    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bycryptjs.hash(password, 10);
    const verificationCode = generateVerificationCode();
    const user = new User({
      email,
      password: hashedPassword,
      name,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: "User already exists" });
  }
};

export const login = async (req, res) => {
  res.send("login route");
};

export const logout = async (req, res) => {
  res.send("logout route");
};
