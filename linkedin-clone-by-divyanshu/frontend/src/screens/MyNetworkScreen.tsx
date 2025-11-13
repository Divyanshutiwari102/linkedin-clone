// src/screens/MyNetworkScreen.tsx
import React from "react";
import Layout from "../Layout";
import "../styles/mynetwork.css";

export default function MyNetworkScreen() {
  const suggestions = [
    {
      id: 1,
      name: "Rohit Sharma",
      title: "Frontend Developer | React.js",
      avatar: "/default avtar.jpg",
    },
    {
      id: 2,
      name: "Priya Patel",
      title: "UI/UX Designer • Figma Expert",
      avatar: "/default avtar.jpg",
    },
    {
      id: 3,
      name: "Sanjay Kumar",
      title: "Backend Developer | Node.js",
      avatar: "/default avtar.jpg",
    },
    {
      id: 4,
      name: "Akash Verma",
      title: "Data Analyst | Python, SQL",
      avatar: "/default avtar.jpg",
    },
  ];

  return (
    <Layout>
      <div className="network-container">
        {/* LEFT SECTION */}
        <div className="network-left">
          <h2 className="title">People you may know</h2>

          <div className="profiles-grid">
            {suggestions.map((user) => (
              <div key={user.id} className="profile-card">
                <img src={user.avatar} className="profile-photo" alt="avatar" />

                <h3>{user.name}</h3>
                <p>{user.title}</p>

                <button className="connect-btn">Connect</button>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="network-right">
          <div className="invitation-box">
            <h3>Invitations</h3>
            <p>No pending invitations</p>
          </div>

          <div className="discover-box">
            <h3>Discover more</h3>
            <ul>
              <li>People</li>
              <li>Groups</li>
              <li>Events</li>
              <li>Pages</li>
              <li>Newsletters</li>
              <li>Hashtags</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
