import axios from "axios";

const API = axios.create({
  baseURL: "https://job-skill-analyzer-06wr.onrender.com/"
});

// Add token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;