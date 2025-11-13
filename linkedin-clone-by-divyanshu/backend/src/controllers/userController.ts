import { Request, Response } from "express";
import User from "../models/User";
import { AuthRequest } from "../middleware/verifyFirebaseToken";

/**
 * 🔹 Register new user from frontend (manual register)
 * Called when a new user signs up via Firebase Auth
 */
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, imageUrl, uid } = req.body;

    if (!name || !email || !uid)
      return res.status(400).json({ message: "Missing required fields" });

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    // Create new user
    const newUser = await User.create({
      name,
      email,
      imageUrl: imageUrl || "",
      firebaseUID: uid,
    });

    return res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error("❌ registerUser error:", error);
    return res.status(500).json({ message: "Server error", error });
  }
};

/**
 * 🔹 Upsert user from Firebase decoded token (used after login)
 * If user exists → update info, else → create new entry.
 */
export async function upsertUser(req: AuthRequest, res: Response) {
  try {
    const { uid } = req;
    const firebaseUser = req.firebaseUser || {};

    const email = firebaseUser.email;
    const name = firebaseUser.name || firebaseUser.displayName;
    const photoURL = firebaseUser.picture || firebaseUser.photoURL;

    if (!uid || !email)
      return res.status(400).json({ message: "Invalid Firebase user data" });

    const user = await User.findOneAndUpdate(
      { firebaseUID: uid },
      {
        firebaseUID: uid,
        email,
        name,
        imageUrl: photoURL || "",
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    return res.json({ message: "User synced with Firebase", user });
  } catch (error) {
    console.error("❌ upsertUser error:", error);
    return res.status(500).json({ message: "Server error", error });
  }
}

/**
 * 🔹 Get current user (using Firebase token middleware)
 */
export async function getMe(req: AuthRequest, res: Response) {
  try {
    const { uid } = req;
    if (!uid) return res.status(401).json({ message: "Unauthorized" });

    const user = await User.findOne({ firebaseUID: uid });
    if (!user) return res.status(404).json({ message: "User not found" });

    return res.json(user);
  } catch (error) {
    console.error("❌ getMe error:", error);
    return res.status(500).json({ message: "Server error", error });
  }
}
