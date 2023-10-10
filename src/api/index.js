import axios from "axios";

const BASE_URL = "http://localhost:8000";
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Credentials": "true",
  },
});

axios.interceptors.request.use(
  function (config) {
    const persistRootValue = JSON.parse(localStorage.getItem("persist:root"));
    const userJSON = JSON.parse(persistRootValue.user);
    const token = userJSON.token;
    console.log(token);

    if (token) {
      console.log(config.headers);
      config.headers.Authorization = `${token}`;
    }
    console.log(config);
    return config;
  },
  function (err) {
    console.log(err);
    return err;
  }
);

axios.interceptors.response.use(
  function (response) {
    const persistRootValue = JSON.parse(localStorage.getItem("persist:root"));

    const userJSON = JSON.parse(persistRootValue.user);

    const token = userJSON.token;

    return response;
  },
  function (err) {
    console.log(err);
    return err;
  }
);
export default api;
