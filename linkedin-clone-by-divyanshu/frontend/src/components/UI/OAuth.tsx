// ✅ OAuth.tsx — Plain CSS version by Divyanshu Tiwari
import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../config";
import { toast } from "react-toastify";
import "../../styles/ui.css";

export default function OAuth() {
  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        toast.success(`Welcome ${result.user.displayName || "User"}!`);
      }
    } catch (error: any) {
      toast.error(error.message || "Google Sign-in failed ❌");
    }
  };

  return (
    <button onClick={handleGoogleSignIn} className="btn-google">
      <img src="/images/google-icon.png" alt="Google" className="google-icon" />
      Continue with Google
    </button>
  );
}
