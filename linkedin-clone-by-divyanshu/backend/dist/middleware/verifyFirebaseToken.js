"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyFirebaseToken = verifyFirebaseToken;
const firebaseAdmin_1 = require("../config/firebaseAdmin");
/**
 * ✅ Middleware to verify Firebase ID token from Authorization header.
 * Usage: add it before protected routes.
 */
async function verifyFirebaseToken(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "No auth token provided" });
        }
        const idToken = authHeader.split(" ")[1];
        const decodedToken = await firebaseAdmin_1.auth.verifyIdToken(idToken);
        req.uid = decodedToken.uid;
        req.firebaseUser = decodedToken;
        next();
    }
    catch (error) {
        console.error("❌ verifyFirebaseToken error:", error);
        res.status(401).json({ message: "Invalid or expired token" });
    }
}
