// ✅ SignUpScreen.tsx — Fixed redirect, Google popup & LinkedIn mini-logo
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import {
  auth,  
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  googleProvider,
} from "../config/firebase";
import axios from "axios";
import { signupSchemaValidation } from "../utils/schemaValidation/auth";
import type { AuthRequestType } from "../types";
import "../styles/forms.css";

export default function SignUpScreen() {
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<AuthRequestType>({
    resolver: yupResolver(signupSchemaValidation) as any,
  });

  // 🖼️ Profile Picture Handler
  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size must be ≤ 5 MB ❌");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setPreviewImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  // ✳️ Register user with Email/Password
  const handleRegister: SubmitHandler<AuthRequestType> = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const photoURL = previewImage || "/images/default-avatar.png";

      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: data.name, photoURL });

        await axios.post(`${import.meta.env.VITE_API_BASE_URL}/users/register`, {
          uid: auth.currentUser.uid,
          name: data.name,
          email: data.email,
          imageUrl: photoURL,
        });
      }

      toast.success("🎉 Account created successfully! Redirecting to login...");
      setTimeout(() => navigate("/login"), 1500);
    } catch (error: any) {
      console.error("Signup error:", error);
      toast.error(error.response?.data?.message || "Registration failed ❌");
    }
  };

  // 🔹 Google Sign-up
  const handleGoogleSignUp = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;

      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/users/register`, {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        imageUrl: user.photoURL,
      });

      toast.success(`Welcome ${user.displayName}! 🎉`);
      navigate("/home");
    } catch (error: any) {
      console.error("Google Sign-in error:", error);
      toast.error(error.message || "Google sign-in failed ❌");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <div className="logo-wrapper">
          <img src="welcoming-Linkedin-Logo.png" alt="LinkedIn Icon" className="linkedin-icon" />
        </div>
        <img
          src="welcoming.svg"
          alt="Welcome Illustration"
          className="signup-image"
        />
      </div>

      <div className="signup-right">
        <form className="form-box" onSubmit={handleSubmit(handleRegister)}>
          <h2>Create Account</h2>

          <label>Name</label>
          <input
            type="text"
            {...register("name")}
            className={errors.name ? "input-error" : ""}
            placeholder="Your name"
          />

          <label>Email</label>
          <input
            type="email"
            {...register("email")}
            className={errors.email ? "input-error" : ""}
            placeholder="Email address"
          />

          <label>Password</label>
          <input
            type="password"
            {...register("password")}
            className={errors.password ? "input-error" : ""}
            placeholder="Password"
          />

          <label>Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword")}
            className={errors.confirmPassword ? "input-error" : ""}
            placeholder="Re-enter password"
          />

          <label>Profile Picture (optional)</label>
          <input type="file" accept="image/*" onChange={handleImageSelect} />
          {previewImage && (
            <img src={previewImage} alt="Preview" className="preview-image" />
          )}

          <button type="submit" className="btn-linkedin">
            Agree & Join
          </button>

          <div className="divider">OR</div>

          <button type="button" className="btn-google" onClick={handleGoogleSignUp}>
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
            Continue with Google
          </button>

          <p className="form-footer">
            Already on LinkedIn?{" "}
            <Link to="/login" className="link">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}