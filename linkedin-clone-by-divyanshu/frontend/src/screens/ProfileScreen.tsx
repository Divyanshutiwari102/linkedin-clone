import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import Layout from "../Layout";
import "../styles/profile.css";

export default function ProfileScreen() {
  const [user] = useAuthState(auth);

  return (
    <Layout>
      <div className="profile-container">
        {/* Profile Banner */}
        <div className="profile-banner"></div>

        {/* Profile Card */}
        <div className="profile-card">
          <img
            src={user?.photoURL || "/default avtar.jpg"}
            alt="Profile"
            className="profile-picture"
          />

          <h2 className="profile-name">
            {user?.displayName || "Anonymous User"}
          </h2>

          <p className="profile-email">{user?.email}</p>

          {/* About Section */}
          <div className="profile-section">
            <h3>About</h3>
            <p>
              Passionate developer exploring opportunities to connect, collaborate,
              and create impactful projects on LinkedIn Clone 🚀
            </p>
          </div>

          {/* Stats */}
          <div className="profile-stats">
            <div className="stat-box">
              <span className="stat-number">56</span>
              <span className="stat-label">Connections</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">12</span>
              <span className="stat-label">Posts</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">8</span>
              <span className="stat-label">Followers</span>
            </div>
          </div>

          {/* Button */}
          <button className="edit-btn">Edit Profile</button>
        </div>
      </div>
    </Layout>
  );
}
