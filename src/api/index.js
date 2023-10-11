import axios from "axios";

axios.defaults.baseURL = "http://52.79.44.212:8000";
const api = axios.create({
  baseURL: "http://52.79.44.212:8000",
  headers: {
    // "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Origin": "http://judy-board.s3-website.ap-northeast-2.amazonaws.com",
    "Access-Control-Allow-Credentials": "true",
  },
});

api.interceptors.request.use(
  function (config) {
    const persistRootValue = JSON.parse(localStorage.getItem("persist:root"));
    const userJSON = JSON.parse(persistRootValue.user);
    const token = userJSON.token;

    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  function (err) {
    console.log(err);
    return err;
  }
);

api.interceptors.response.use(
  function (config) {
    return config;
  },
  function (err) {
    if (err.response.status === 410) {
      alert("로그인이 만료되었습니다");
      window.location.assign("/");
      throw err.response.data.message;
    }
    return err;
  }
);
export default api;
