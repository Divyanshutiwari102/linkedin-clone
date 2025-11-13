// ✅ Header.tsx — Plain CSS version by Divyanshu Tiwari
import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config";
import { toast } from "react-toastify";
import {
  FaHome,
  FaUsers,
  FaBriefcase,
  FaBell,
  FaEnvelope,
} from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

import HeaderOption from "./HeaderOption";
import "../../styles/layout.css"; // ✅ central CSS file for header/sidebar/feed

export default function Header() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="header-inner">
        {/* Left Section */}
        <div className="header-left">
          <BsLinkedin className="linkedin-icon" />
          <input type="text" placeholder="Search" className="search-input" />
        </div>

        {/* Center Section */}
        <div className="header-center">
          <HeaderOption Icon={FaHome} title="Home" onClick={() => navigate("/home")} />
          <HeaderOption Icon={FaUsers} title="My Network" onClick={() => navigate("/my-network")} />
          <HeaderOption Icon={FaBriefcase} title="Jobs" onClick={() => navigate("/jobs")} />
          <HeaderOption Icon={FaEnvelope} title="Messaging" onClick={() => navigate("/messages")} />
          <HeaderOption Icon={FaBell} title="Notifications" onClick={() => navigate("/notifications")} />
        </div>

        {/* Right Section */}
        <div className="header-right">
          <HeaderOption
            avatar={user?.photoURL || "/images/default-avatar.png"}
            title="Me"
            onClick={handleLogout}
          />
        </div>
      </div>
    </header>
  );
}
