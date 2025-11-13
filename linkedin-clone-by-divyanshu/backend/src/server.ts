// ✅ backend/src/server.ts
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db";
import { initFirebaseAdmin } from "./config/firebaseAdmin";
import userRoutes from "./routes/userRoutes";
import postRoutes from "./routes/postRoutes";
import authRoutes from "./routes/authRoutes";


// ✅ Load environment variables FIRST
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "";
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "http://localhost:5173";

async function start() {
  console.log("🟢 Loading environment...");
  console.log({
    PORT,
    hasMongoURI: !!MONGO_URI,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
    hasPrivateKey: !!process.env.FIREBASE_PRIVATE_KEY,
  });

  // ✅ Connect MongoDB
  await connectDB(MONGO_URI);

  // ✅ Initialize Firebase Admin (throws if missing)
  initFirebaseAdmin();

  const app = express();

  app.use(
    cors({
      origin: FRONTEND_ORIGIN,
      credentials: true,
    })
  );
  app.use(express.json({ limit: "5mb" }));

  app.use("/api/users", userRoutes);
  app.use("/api/posts", postRoutes);
  app.use("/api/auth", authRoutes);


  app.get("/api/health", (_, res) => res.json({ ok: true }));

  app.listen(PORT, () => {
    console.log(`🚀 Backend running at http://localhost:${PORT}`);
  });
}

start().catch((err) => {
  console.error("❌ Failed to start server:", err);
  process.exit(1);
});
