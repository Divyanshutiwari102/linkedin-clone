import React, { useState } from "react";
import Layout from "../Layout";
import "../styles/messages.css";

interface ChatUser {
  id: number;
  name: string;
  title: string;
  avatar: string;
  lastMessage: string;
}

export default function MessagesScreen() {
  const chatUsers: ChatUser[] = [
    {
      id: 1,
      name: "Rahul Sharma",
      title: "Frontend Developer at Infosys",
      avatar: "/default avtar.jpg",
      lastMessage: "Hey! Did you finish your project?",
    },
    {
      id: 2,
      name: "Priya Singh",
      title: "UI/UX Designer",
      avatar: "/default avtar.jpg",
      lastMessage: "Let’s connect for a design review!",
    },
    {
      id: 3,
      name: "Aman Gupta",
      title: "Backend Engineer (Node.js)",
      avatar: "/default avtar.jpg",
      lastMessage: "Send me the API documentation.",
    },
  ];

  const [activeChat, setActiveChat] = useState<ChatUser>(chatUsers[0]);
  const [chatInput, setChatInput] = useState("");

  const handleSend = () => {
    if (!chatInput.trim()) return;
    alert("Message sent: " + chatInput); // Temporary behavior
    setChatInput("");
  };

  return (
    <Layout>
      <div className="messages-container">
        {/* LEFT: Chat Sidebar */}
        <div className="chat-sidebar">
          <h2>Messaging</h2>
          <input className="chat-search" placeholder="Search messages" />

          <div className="chat-list">
            {chatUsers.map((user) => (
              <div
                key={user.id}
                className={`chat-item ${
                  activeChat.id === user.id ? "active" : ""
                }`}
                onClick={() => setActiveChat(user)}
              >
                <img src={user.avatar} alt="avatar" className="chat-avatar" />
                <div>
                  <h4>{user.name}</h4>
                  <p>{user.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Chat Window */}
        <div className="chat-window">
          <div className="chat-header">
            <img src={activeChat.avatar} alt="avatar" />
            <div>
              <h3>{activeChat.name}</h3>
              <p>{activeChat.title}</p>
            </div>
          </div>

          <div className="chat-body">
            <p className="chat-message incoming">
              {activeChat.lastMessage}
            </p>
          </div>

          <div className="chat-input-box">
            <input
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Write a message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
