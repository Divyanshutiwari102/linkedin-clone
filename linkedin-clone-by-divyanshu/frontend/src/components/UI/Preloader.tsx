// ✅ Preloader.tsx — LinkedIn Splash Loader by Divyanshu Tiwari
import React, { useEffect, useState } from "react";
import "../../styles/theme.css";
import "../../styles/splash.css"; // 👈 Add this import for pulse animation

export default function Preloader() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
      <div className="logo-wrapper">
        <img
          src="/welcoming-Linkedin-Logo.png"
          alt="LinkedIn Loading"
          className="preloader-logo"
        />
        {/* 🔵 Blue pulse loader below the logo */}
        <div className="splash-loader"></div>
      </div>
    </div>
  );
}
