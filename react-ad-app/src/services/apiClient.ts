import axios from "axios";

// one shared axios instance so every request in the app
// uses the same base URL, headers, and timeout automatically
const apiClient = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;