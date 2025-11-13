// ✅ LogInScreen.tsx — Full LinkedIn-style Login Page by Divyanshu Tiwari
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { auth, googleProvider, signInWithEmailAndPassword, signInWithPopup } from "../config/firebase";
import { LoginSchemaValidation } from "../utils/schemaValidation/auth";
import type { AuthLoginRequestType } from "../types";
import "../styles/login.css";
import axios from "axios";

export default function LogInScreen() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthLoginRequestType>({
    resolver: yupResolver(LoginSchemaValidation) as any,
  });

  const handleLogin: SubmitHandler<AuthLoginRequestType> = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      if (userCredential.user) {
        toast.success("Login Successful 🎉");
        navigate("/home");
      }
    } catch (error: any) {
      toast.error(error.message || "Invalid email or password ❌");
    }
  };

  return (
    <div className="login-page">
      {/* -------- NAVBAR -------- */}
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
            Sign in
          </button>
          <button
            className="nav-btn fill"
            onClick={() => navigate("/register")}
          >
            Join for free
          </button>
        </div>
      </nav>

      {/* -------- HERO SECTION -------- */}
      <div className="login-content">
        {/* Left side: Login form */}
        <div className="login-left">
          <h1 className="headline">
            Find jobs, connections, insights and more to grow your career
          </h1>

          <button className="btn btn-google"
             onClick={async () => {
              try {
                const userCredential = await signInWithPopup(auth, googleProvider);
                const user = userCredential.user;
                await axios.post(`${import.meta.env.VITE_API_BASE_URL}/users/register`, {
                  uid: user.uid,
                  name: user.displayName,
                  email: user.email,
                  imageUrl: user.photoURL,
                });
                toast.success(`Welcome ${user.displayName}!`);
                navigate("/home");
              } catch (error: any) {
                toast.error(error.message || "Google login failed ❌");
              }
            }}
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
            />
            Continue with Google
          </button>

          <div className="divider">or</div>

          <form className="form-box" onSubmit={handleSubmit(handleLogin)}>
            <label>Email</label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter email"
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && (
              <p className="error-text">{errors.email.message?.toString()}</p>
            )}

            <label>Password</label>
            <input
              type="password"
              {...register("password")}
              placeholder="Enter password"
              className={errors.password ? "input-error" : ""}
            />
            {errors.password && (
              <p className="error-text">{errors.password.message?.toString()}</p>
            )}

            <Link to="/forgot-password" className="forgot-link">
              Forgot Password?
            </Link>

            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </form>

          <p className="terms-text">
            By clicking Continue or signing in, you agree to LinkedIn’s{" "}
            <span className="link">User Agreement</span>,{" "}
            <span className="link">Privacy Policy</span>, and{" "}
            <span className="link">Cookie Policy</span>.
          </p>

          <p className="join-text">
            New to LinkedIn?{" "}
            <Link to="/register" className="link">
              Join now
            </Link>
          </p>
        </div>

        {/* Right side: Illustration */}
        <div className="login-right">
          <img
            src="/welcoming.svg"
            alt="Welcome Illustration"
            className="login-illustration"
          />
        </div>
      </div>

      {/* -------- BOTTOM CONTEXT SECTION -------- */}
      <div className="bottom-section">
        <div className="section explore">
          <h2>Explore top LinkedIn content</h2>
          <p>
            Discover relevant posts and expert insights — curated by topic and
            in one place.
          </p>
          <div className="tags">
            {[
              "Career",
              "Productivity",
              "Finance",
              "Soft Skills & Emotional Intelligence",
              "Project Management",
              "Education",
              "Technology",
              "Leadership",
              "Ecommerce",
            ].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
            <button className="show-all">Show all</button>
          </div>
        </div>

        <div className="section jobs">
          <h2>Find the right job or internship for you</h2>
          <div className="tags">
            {[
              "Engineering",
              "Business Development",
              "Finance",
              "Retail Associate",
              "Customer Service",
              "Information Technology",
              "Operations",
              "Marketing",
              "Human Resources",
            ].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
            <button className="show-all">Show more</button>
          </div>
        </div>
      </div>
    </div>
  );
}