import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/newlayout.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const navItems = [
    { path: "/home", label: "Home", icon: "🏠" },
    { path: "/mynetwork", label: "My Network", icon: "👥" },
    { path: "/jobs", label: "Jobs", icon: "💼" },
    { path: "/messages", label: "Messages", icon: "💬" },
    { path: "/notifications", label: "Notifications", icon: "🔔" },
    { path: "/profile", label: "Profile", icon: "👤" },
  ];

  return (
    <div className="layout-container">
      {/* NAVBAR */}
      <nav className="navbar-container">
        <div className="nav-left">
          <img src="/welcoming-Linkedin-Logo.png" alt="Logo" className="nav-logo" />
          <input type="text" className="nav-search" placeholder="Search" />
        </div>

        <div className="nav-right">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${location.pathname === item.path ? "active" : ""}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <p>{item.label}</p>
            </Link>
          ))}
        </div>
      </nav>

      {/* PAGE WRAPPER */}
      <div className="page-wrapper">
        {/* Sidebar */}
        <aside className="sidebar">
          <img src="/WhatsApp Image 2025-10-10 at 12.45.49_06480f03.jpg" className="sidebar-profile" />
          <h3 className="sidebar-name">Divyanshu Tiwari</h3>
          <p className="sidebar-title">Software Developer | Java | React | Node</p>

          <hr />

          <p className="sidebar-link">Profile Views: 208</p>
          <p className="sidebar-link">Post Impressions: 1,512</p>

          <hr />

          <p className="sidebar-link">Saved Items</p>
        </aside>

        {/* Main Content */}
        <main className="main-content">{children}</main>

        {/* Right Suggestions Panel */}
        <aside className="rightbar">
          <h3>LinkedIn News</h3>
          <ul>
            <li>🔥 AI jobs are exploding in India</li>
            <li>📈 React & Next.js demand increasing</li>
            <li>💼 WFH roles rising 70%</li>
            <li>🧑‍💻 Freshers getting placed faster</li>
          </ul>

          <h3>People You May Know</h3>
          <div className="suggestion">
            <img src="/default avtar.jpg" />
            <p><b>Aman Gupta</b> • Software Engineer</p>
            <button>Connect</button>
          </div>

          <div className="suggestion">
            <img src="/default avtar.jpg" />
            <p><b>Riya Sharma</b> • Data Scientist</p>
            <button>Connect</button>
          </div>
        </aside>
      </div>
    </div>
  );
}
