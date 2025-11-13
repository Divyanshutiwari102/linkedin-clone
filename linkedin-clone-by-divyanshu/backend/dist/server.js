"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ✅ backend/src/server.ts
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./config/db");
const firebaseAdmin_1 = require("./config/firebaseAdmin");
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const postRoutes_1 = __importDefault(require("./routes/postRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
// ✅ Load environment variables FIRST
dotenv_1.default.config();
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
    await (0, db_1.connectDB)(MONGO_URI);
    // ✅ Initialize Firebase Admin (throws if missing)
    (0, firebaseAdmin_1.initFirebaseAdmin)();
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)({
        origin: FRONTEND_ORIGIN,
        credentials: true,
    }));
    app.use(express_1.default.json({ limit: "5mb" }));
    app.use("/api/users", userRoutes_1.default);
    app.use("/api/posts", postRoutes_1.default);
    app.use("/api/auth", authRoutes_1.default);
    app.get("/api/health", (_, res) => res.json({ ok: true }));
    app.listen(PORT, () => {
        console.log(`🚀 Backend running at http://localhost:${PORT}`);
    });
}
start().catch((err) => {
    console.error("❌ Failed to start server:", err);
    process.exit(1);
});
