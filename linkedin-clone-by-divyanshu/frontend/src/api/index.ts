import axios from "axios";

// 🔥 Use your Render backend URL
const API = axios.create({
  baseURL: "import.meta.env.VITE_API_BASE_URL",
});

// Optional: automatically attach token if using Firebase Auth
API.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("authToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
