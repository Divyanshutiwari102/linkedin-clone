"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const firebaseAdmin_1 = require("../config/firebaseAdmin");
const User_1 = __importDefault(require("../models/User"));
// 🧠 POST /api/auth/signup
const registerUser = async (req, res) => {
    try {
        const { name, email, password, imageUrl } = req.body;
        // 1️⃣ Create Firebase user
        const userRecord = await firebaseAdmin_1.auth.createUser({
            email,
            password,
            displayName: name,
            photoURL: imageUrl || "",
        });
        // 2️⃣ Save to MongoDB
        const newUser = new User_1.default({
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
    }
    catch (error) {
        console.error("❌ Signup Error:", error.message);
        res.status(500).json({ success: false, error: error.message });
    }
};
exports.registerUser = registerUser;
// 🧠 POST /api/auth/login
const loginUser = async (req, res) => {
    try {
        const { email } = req.body;
        // Find user in MongoDB
        const existingUser = await User_1.default.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({
            success: true,
            message: "Login successful 🎉",
            user: existingUser,
        });
    }
    catch (error) {
        console.error("❌ Login Error:", error.message);
        res.status(500).json({ success: false, error: error.message });
    }
};
exports.loginUser = loginUser;
