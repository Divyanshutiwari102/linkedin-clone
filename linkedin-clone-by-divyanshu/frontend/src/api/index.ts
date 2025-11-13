import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // http://localhost:5000/api
});

// Optional: automatically attach token if you store Firebase user token
API.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("authToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
