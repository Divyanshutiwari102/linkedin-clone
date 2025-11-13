import * as dotenv from "dotenv";
import admin from "firebase-admin";

// ✅ Make sure .env is loaded
dotenv.config({ path: "./.env" });

// Debug log
console.log("🧩 Firebase ENV check (from firebaseAdmin.ts):", {
  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
  FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
  hasPrivateKey: !!process.env.FIREBASE_PRIVATE_KEY,
});

export function initFirebaseAdmin() {
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  let privateKey = process.env.FIREBASE_PRIVATE_KEY || "";

  if (privateKey.includes("\\n")) {
    privateKey = privateKey.replace(/\\n/g, "\n");
  }

  if (!projectId || !clientEmail || !privateKey) {
    console.error("❌ Firebase ENV check failed:");
    console.error("projectId:", projectId);
    console.error("clientEmail:", clientEmail);
    console.error("privateKey exists:", !!privateKey);
    throw new Error("Missing Firebase admin credentials. Please check your .env file.");
  }

  if (admin.apps.length) return admin.app();

  return admin.initializeApp({
    credential: admin.credential.cert({
      projectId,
      clientEmail,
      privateKey,
    } as admin.ServiceAccount),
  });
}

export const adminApp = initFirebaseAdmin();
export const auth = adminApp.auth();
