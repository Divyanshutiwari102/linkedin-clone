// ✅ SplashScreen.tsx — LinkedIn-style Splash Loader by Divyanshu Tiwari
import React, { useEffect } from "react";
import "../styles/splash.css";

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 2000); // ⏳ Hide after 2s
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-container">
      <div className="logo-wrapper">
        <img
          src="/welcoming-Linkedin-Logo.png"
          alt="LinkedIn Logo"
          className="splash-logo"
        />
        <div className="splash-loader"></div>
      </div>
    </div>
  );
};

export default SplashScreen;
