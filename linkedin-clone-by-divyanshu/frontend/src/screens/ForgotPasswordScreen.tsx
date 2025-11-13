// ✅ ForgotPasswordScreen.tsx — LinkedIn-style Reset Page by Divyanshu Tiwari
import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../config/firebase";
import { ForgotPasswordSchemaValidation } from "../utils/schemaValidation/auth";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";

interface ForgotPasswordFormType {
  email: string;
}

export default function ForgotPasswordScreen() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormType>({
    resolver: yupResolver(ForgotPasswordSchemaValidation),
  });

  const handleForgotPassword: SubmitHandler<ForgotPasswordFormType> = async (
    data
  ) => {
    try {
      await sendPasswordResetEmail(auth, data.email);
      toast.success("✅ Password reset email sent! Please check your inbox.");
      navigate("/login");
    } catch (error: any) {
      toast.error(error.message || "❌ Failed to send password reset email.");
    }
  };

  return (
    <div className="login-page">
      {/* Navbar */}
      <nav className="navbar">
        <img
          src="/welcoming-Linkedin-Logo.png"
          alt="LinkedIn Logo"
          className="nav-logo"
        />
        <div className="nav-links">
          <button
            className="nav-btn outline"
            onClick={() => navigate("/login")}
          >
            Back to Sign in
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="login-content">
        <div className="login-left">
          <h1 className="headline">Reset your password</h1>
          <p style={{ color: "#666", marginBottom: "20px" }}>
            Enter your email address and we’ll send you a link to reset your
            password.
          </p>

          <form className="form-box" onSubmit={handleSubmit(handleForgotPassword)}>
            <label>Email</label>
            <input
              type="email"
              {...register("email")}
              className={errors.email ? "input-error" : ""}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="error-text">{errors.email.message?.toString()}</p>
            )}

            <button type="submit" className="btn btn-primary">
              Send Reset Link
            </button>
          </form>

          <p className="join-text">
            Return to{" "}
            <Link to="/login" className="link">
              Sign in
            </Link>
          </p>
        </div>

        {/* Right side illustration */}
        <div className="login-right">
          <img
            src="/welcoming.svg"
            alt="Forgot Password Illustration"
            className="login-illustration"
          />
        </div>
      </div>
    </div>
  );
}
