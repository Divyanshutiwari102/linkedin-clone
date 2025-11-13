import axios from "axios";

// 🔥 Use your Render backend URL
const API = axios.create({
  baseURL: "https://linkedin-clone-mt1e.onrender.com/api",
});

// Optional: automatically attach token if using Firebase Auth
API.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("authToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
