// Modified by Divyanshu Tiwari – AppDost Submission
import React from "react";
import { Navigate, Outlet } from "react-router-dom"; // ✅ Correct router import
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "..//config/firebase"; // ✅ Updated path to match your new folder structure

import ShimmerLoader from ".//.//ShimmerUI/ShimmerLoader";

const PrivateRoute: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);

  // Show loading animation while checking auth state
  if (loading) {
    return <ShimmerLoader />;
  }

  // Handle Firebase errors gracefully
  if (error) {
    return (
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center px-6 py-12">
        <p className="mt-8 w-full max-w-lg rounded border p-6 text-center font-bold text-red-600">
          Authentication Error. Please refresh or try again later.
        </p>
      </div>
    );
  }

  // If not logged in, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Otherwise, render protected content
  return (
    <section className="min-h-screen bg-customWhite-40 dark:bg-customBlack-900 transition-colors">
      <Outlet />
    </section>
  );
};

export default PrivateRoute;
