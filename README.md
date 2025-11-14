📘 LinkedIn Clone — Full Stack Project
Built by Divyanshu Tiwari
This is a fully functional LinkedIn Clone, developed as a full-stack project using:
React + TypeScript (Frontend)
Firebase Authentication
Node.js + Express + TypeScript (Backend API)
MongoDB Atlas (Database)
Render (Frontend + Backend Deployment)
The project mimics essential features of LinkedIn such as posting content, displaying feed, showing user profiles, and rendering dynamic avatars.
🚀 Live Demo
🔹 Frontend:
https://linkedin-frontend-8yzw.onrender.com
🔹 Backend API:
https://linkedin-clone-mt1e.onrender.com/api/posts
(Add /api/... for all backend routes)
📌 Features
🔑 Authentication
Firebase Email/Password Login
Firebase Secure Token Storage
Protected Routes for Logged-In Users

🧑‍💼 User Profile
Displays user avatar or fallback default avatar
User name & email shown dynamically
Sidebar with profile views, post impressions & saved items
📝 Create Post
Create new posts with text
Upload & preview images
Dynamic new post appears instantly in the feed
📰 Home Feed
Dynamic list of posts
Each post includes:
User avatar
Name & title
Post image
Post description
Default avatar visible if no image exists
👥 My Network Page
People-you-may-know section
Default avatar fallback everywhere
“Connect” button for UI simulation
💼 Jobs, Messaging & Notifications
Components & screens included
Navigation fully functional via React Router
⚙️ Backend API
Built using Express + MongoDB.
Routes:
Method	Route	Description
GET	/api/posts	Get all posts
POST	/api/posts	Create new post
GET	/api/users/:id	Get user data
POST	/api/auth/login	Login (Firebase token verification)

🛠 Tech Stack
Frontend
React (Vite + TypeScript)
Firebase Authp-]
Axios
CSS + Custom UI Components

Backend
Node.js + Express
TypeScript
MongoDB + Mongoose
Firebase Admin SDK

Deployment
Render Web Service (Backend)
Render Static Site (Frontend)
MongoDB Atlas (Cloud Database)

📂 Project Structure
linkedin-clone/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── config/
│   │   └── server.ts
│   ├── dist/
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── screens/
│   │   ├── utils/
│   │   ├── layouts/
│   │   └── config/
│   ├── dist/
│   └── package.json
🏗️ Deployment Details
Backend Render Setup
Root Directory: backend
Build Command: npm install && npm run build
Start Command: node dist/server.js

Frontend Render Setup
Root Directory: frontend
Build Command: npm install && npm run build
Publish Directory: dist
Start Command: (Static Site - none required)

Environment variables include:
MONGO_URI
FIREBASE_PROJECT_ID
FIREBASE_CLIENT_EMAIL
FIREBASE_PRIVATE_KEY

👨‍💻 Developer
Divyanshu Tiwari
Software Developer
React | Node.js | TypeScript | Firebase
LinkedIn Clone Creator


