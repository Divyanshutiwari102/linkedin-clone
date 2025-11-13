import express from "express";
import { registerUser, upsertUser, getMe } from "../controllers/userController";
import { verifyFirebaseToken } from "../middleware/verifyFirebaseToken";

const router = express.Router();

// Public
router.post("/register", registerUser);

// Protected (requires valid Firebase token)
router.post("/sync", verifyFirebaseToken, upsertUser);
router.get("/me", verifyFirebaseToken, getMe);

export default router;
