import axios from "axios";

const BASE_URL = "http://localhost:8000";
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Credentials": "true",
  },
});

export default api;
