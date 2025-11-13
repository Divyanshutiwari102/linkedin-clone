import { Request, Response } from "express";
import { auth } from "../config/firebaseAdmin";
import User from "../models/User";

// 🧠 POST /api/auth/signup
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, imageUrl } = req.body;

    // 1️⃣ Create Firebase user
    const userRecord = await auth.createUser({
      email,
      password,
      displayName: name,
      photoURL: imageUrl || "",
    });

    // 2️⃣ Save to MongoDB
    const newUser = new User({
      firebaseUid: userRecord.uid,
      name,
      email,
      imageUrl: userRecord.photoURL,
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "Account created successfully 🎉",
      user: newUser,
    });
  } catch (error: any) {
    console.error("❌ Signup Error:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

// 🧠 POST /api/auth/login
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    // Find user in MongoDB
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "Login successful 🎉",
      user: existingUser,
    });
  } catch (error: any) {
    console.error("❌ Login Error:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};
