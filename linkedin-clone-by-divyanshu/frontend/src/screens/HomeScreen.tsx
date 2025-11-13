// ✅ HomeScreen.tsx — LinkedIn Clone Dynamic Home Page by Divyanshu Tiwari
import React, { useState, useEffect } from "react";
import "../styles/home.css";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

interface Post {
  id: number;
  name: string;
  title: string;
  image: string;
  description: string;
  avatar: string;
}

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newPost, setNewPost] = useState({ text: "", image: "" });

  // 🔹 Load Firebase user & demo posts
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

    setPosts([
      {
        id: 1,
        name: "Divyanshu Tiwari",
        title: "Web Developer | LinkedIn Clone Creator",
        image: "/WhatsApp Image 2025-10-10 at 12.45.49_06480f03.jpg",
        description:
          "Building scalable web systems using React, Node.js, and Firebase — turning ideas into products 💡⚙️",
        avatar: "/WhatsApp Image 2025-10-10 at 12.45.49_06480f03.jpg",
      },
      {
        id: 2,
        name: "Tech Community",
        title: "JavaScript | Node.js | Frontend",
        image: "/javascript.webp",
        description:
          "Master JavaScript — the language of the web! Create, build, and innovate 🚀",
        avatar: "/default avtar.jpg",
      },
      {
        id: 3,
        name: "Frontend Devs",
        title: "HTML5 & CSS3 Updates",
        image: "/css.png",
        description:
          "Design beautiful and responsive layouts using HTML5 and CSS3 ✨",
        avatar: "/default avtar.jpg",
      },
    ]);
  }, []);

  // 🔹 Create a new post
  const handleCreatePost = () => {
    if (!newPost.text && !newPost.image) return;
    const newFeedPost = {
      id: Date.now(),
      name: user?.displayName || "Divyanshu Tiwari",
      title: "Software Developer | IILM University",
      image: newPost.image,
      description: newPost.text,
      avatar:
        user?.photoURL ||
        "/WhatsApp Image 2025-10-10 at 12.45.49_06480f03.jpg",
    };
    setPosts([newFeedPost, ...posts]);
    setShowModal(false);
    setNewPost({ text: "", image: "" });
  };

  // 🔹 Handle image preview
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () =>
      setNewPost((prev) => ({ ...prev, image: reader.result as string }));
    reader.readAsDataURL(file);
  };

  return (
    <div className="home-page">
      {/* 🔹 TOP NAVIGATION BAR */}
      <nav className="navbar">
        <div className="nav-left">
          <img
            src="/welcoming-Linkedin-Logo.png"
            alt="LinkedIn"
            className="nav-logo"
          />
          <input
            type="text"
            placeholder="Search"
            className="search-bar"
          />
        </div>
        <div className="nav-right">
          <button onClick={() => navigate("/home")}>🏠 Home</button>
          <button onClick={() => navigate("/network")}>👥 My Network</button>
          <button onClick={() => navigate("/jobs")}>💼 Jobs</button>
          <button onClick={() => navigate("/messages")}>💬 Messaging</button>
          <button onClick={() => navigate("/notifications")}>🔔 Notifications</button>
          <button onClick={() => navigate("/profile")}>🙍‍♂️ Me</button>
        </div>
      </nav>

      {/* 🔹 COVER PHOTO */}
      <div className="cover-section">
        <img src="/cover image.jpg" alt="cover" className="cover-photo" />
      </div>

      {/* 🔹 MAIN CONTENT GRID */}
      <div className="main-grid">
        {/* LEFT SIDEBAR */}
        <div className="sidebar">
          <div className="profile-card">
            <img src="/cover image.jpg" alt="cover" className="profile-cover" />
            <img
              src={
                user?.photoURL ||
                "/WhatsApp Image 2025-10-10 at 12.45.49_06480f03.jpg"
              }
              alt=""
              className="profile-avatar"
            />
            <h3>{user?.displayName || "Divyanshu Tiwari"}</h3>
            <p>{user?.email || "divyanshutivari337@gmail.com"}</p>
            <hr />
            <div className="profile-stats">
              <p>Profile viewers: <strong>45</strong></p>
              <p>Post impressions: <strong>120</strong></p>
            </div>
            <hr />
            <div className="extra-section">
              <p>📁 Saved items</p>
              <p>🧠 Learning</p>
              <p>📢 Groups</p>
              <p>🎯 Hashtags</p>
              <p>🎟️ Events</p>
            </div>
          </div>
        </div>

        {/* FEED SECTION */}
        <div className="feed">
          <div className="create-post-box" onClick={() => setShowModal(true)}>
            <img
              src={
                user?.photoURL ||
                "default avatar.jpg"
              }
              alt=""
              className="small-avatar"
            />
            <input placeholder="Start a post" readOnly />
          </div>

          {posts.map((post) => (
            <div className="post-card" key={post.id}>
              <div className="post-header">
                <img src={post.avatar} alt="avatar" className="small-avatar" />
                <div>
                  <h4>{post.name}</h4>
                  <p>{post.title}</p>
                </div>
              </div>
              <p className="post-description">{post.description}</p>
              {post.image && (
                <img src={post.image} alt="post" className="post-image" />
              )}
              <div className="post-footer">
                <button>👍 Like</button>
                <button>💬 Comment</button>
                <button>↗️ Share</button>
              </div>
            </div>
          ))}

          {/* TERMS SECTION */}
          <p className="terms-text">
            © 2025 LinkedIn Clone by Divyanshu Tiwari — Built for educational
            purposes. All rights reserved.
          </p>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="rightbar">
          <div className="news-card">
            <h3>LinkedIn News</h3>
            <ul>
              <li>🚀 Groww makes strong market debut</li>
              <li>🌍 India at COP30: Latest updates</li>
              <li>💼 Top finance experts to follow</li>
              <li>🎮 Gaming industry on the rise</li>
            </ul>
          </div>

          <div className="ad-card">
            <img src="welcoming-Linkedin-Logo.png" alt="LinkedIn ad" />
            <p>Explore the new LinkedIn experience.</p>
          </div>

          <div className="suggested-card">
            <h3>Suggested for you</h3>
            <p>🔗 React Developers</p>
            <p>⚙️ JavaScript Learners</p>
            <p>🧠 Machine Learning Enthusiasts</p>
          </div>
        </div>
      </div>

      {/* POST MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Create a post</h3>
            <textarea
              placeholder="What do you want to talk about?"
              value={newPost.text}
              onChange={(e) =>
                setNewPost((prev) => ({ ...prev, text: e.target.value }))
              }
            />
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {newPost.image && (
              <img src={newPost.image} alt="preview" className="preview-image" />
            )}
            <div className="modal-actions">
              <button onClick={() => setShowModal(false)}>Cancel</button>
              <button className="post-btn" onClick={handleCreatePost}>
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
