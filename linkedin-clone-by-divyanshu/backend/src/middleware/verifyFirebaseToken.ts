import { Request, Response, NextFunction } from "express";
import { auth as adminAuth } from "../config/firebaseAdmin";

export interface AuthRequest extends Request {
  uid?: string;
  firebaseUser?: any;
}

/**
 * ✅ Middleware to verify Firebase ID token from Authorization header.
 * Usage: add it before protected routes.
 */
export async function verifyFirebaseToken(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No auth token provided" });
    }

    const idToken = authHeader.split(" ")[1];
    const decodedToken = await adminAuth.verifyIdToken(idToken);

    req.uid = decodedToken.uid;
    req.firebaseUser = decodedToken;
    next();
  } catch (error) {
    console.error("❌ verifyFirebaseToken error:", error);
    res.status(401).json({ message: "Invalid or expired token" });
  }
}
