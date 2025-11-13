import React from "react";
import Layout from "../Layout";
import "../styles/jobs.css";

export default function JobsScreen() {
  const recommendedJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Microsoft",
      location: "Hyderabad, India",
      logo: "/javascript.webp",
    },
    {
      id: 2,
      title: "Backend Developer (Node.js)",
      company: "Amazon",
      location: "Bangalore, India",
      logo: "/node.webp",
    },
    {
      id: 3,
      title: "React Developer",
      company: "Google",
      location: "Gurugram, India",
      logo: "/css.png",
    },
  ];

  const trendingSearches = [
    "Software Engineer",
    "React Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Node.js Jobs",
    "Fresher Software Jobs",
  ];

  return (
    <Layout>
      <div className="jobs-container">
        {/* LEFT SECTION */}
        <div className="jobs-left">
          <h2>Recommended for you</h2>

          {recommendedJobs.map((job) => (
            <div key={job.id} className="job-card">
              <img src={job.logo} className="job-logo" alt="company" />

              <div className="job-info">
                <h3>{job.title}</h3>
                <p className="company">{job.company}</p>
                <p className="location">{job.location}</p>
              </div>

              <button className="apply-btn">Apply</button>
            </div>
          ))}
        </div>

        {/* RIGHT SECTION */}
        <div className="jobs-right">
          <h2>Trending Job Searches</h2>

          <div className="job-tags">
            {trendingSearches.map((tag) => (
              <span key={tag} className="job-tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="tips-box">
            <h3>Improve your chances</h3>
            <p>Complete your profile and add your recent skills to get better job matches.</p>
            <button className="profile-btn">Update Profile</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
