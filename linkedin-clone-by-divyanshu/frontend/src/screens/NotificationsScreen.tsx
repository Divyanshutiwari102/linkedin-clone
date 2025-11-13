// src/screens/NotificationsScreen.tsx
import React from "react";
import Layout from "../Layout";
import "../styles/notifications.css";

const notifications = [
  {
    id: 1,
    type: "connection",
    message: "Aarav Gupta sent you a connection request.",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "like",
    message: "Priya Sharma liked your post on ‘Frontend Tips’.",
    time: "5 hours ago",
  },
  {
    id: 3,
    type: "comment",
    message: "Rahul Mehta commented: “Great insights!”",
    time: "1 day ago",
  },
  {
    id: 4,
    type: "job",
    message:
      "New job recommended for you: Software Engineer at TCS.",
    time: "2 days ago",
  },
];

export default function NotificationsScreen() {
  return (
    <Layout>
      <div className="notifications-container">
        <h1 className="notifications-title">Notifications</h1>

        {notifications.length === 0 ? (
          <p className="no-notifications">You have no new notifications.</p>
        ) : (
          <ul className="notifications-list">
            {notifications.map((note) => (
              <li key={note.id} className="notification-card">
                <p className="note-message">{note.message}</p>
                <span className="note-time">{note.time}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
}
