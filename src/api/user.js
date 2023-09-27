import api from "./index";

export const userLogin = (userId, userPw) => {
  api
    .post("user/login", {
      id: userId,
      password: userPw,
    })
    .then((res) => {
      if (res.status === 200) {
        console.log(res.status);
        return true;
      }
    })
    .catch((err) => err);
};
