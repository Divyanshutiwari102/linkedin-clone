// ✅ Sidebar.tsx — Plain CSS version
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config";
import SidebarStar from "./SidebarStar";
import SidebarHashtag from "./SidebarHashtag";
import Activities from "./Activities";
import "../../styles/layout.css";
import { getUserImage } from "../../utils/getUserImage";

export default function Sidebar() {
  const [user] = useAuthState(auth);

  return (
    <aside className="sidebar">
      {/* Top Profile Section */}
      <div className="sidebar-top">
        <img src="/images/cover-photo.png" alt="Cover" className="cover-photo" />
       <img src={getUserImage()} className="profile-pic" alt="profile"
      
        />
        <h2>{user?.displayName || "LinkedIn User"}</h2>
        <p className="email">{user?.email}</p>
      </div>

      {/* Profile Stats */}
      <div className="sidebar-section">
        <SidebarStar title="Who viewed your profile" number={104} />
        <SidebarStar title="Views of your post" number={243} />
      </div>

      {/* Hashtags */}
      <div className="sidebar-section">
        <h3>Recent</h3>
        <div className="hashtags">
          {["ReactJS", "Firebase", "CareerGrowth", "MachineLearning"].map((tag, i) => (
            <SidebarHashtag key={i} hashtag={tag} />
          ))}
        </div>
      </div>

      {/* Activities Section */}
      <div className="sidebar-section">
        <Activities />
      </div>
    </aside>
  );
}
