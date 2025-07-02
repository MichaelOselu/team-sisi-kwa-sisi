import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8005/api", // Change to your Django backend URL
});

export default api;