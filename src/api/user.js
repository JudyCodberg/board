import api from "./index";

export const userLogin = (userId, userPw, nav) => {
  api
    .post("user/login", {
      id: userId,
      password: userPw,
    })
    .then((res) => {
      if (res.status === 200) {
        nav("/board");
        return alert("로그인 성공");
      }
    })
    .catch((err) => {
      alert("로그인 실패");
    });
};

export const checkId = (userId) => {
  api
    .get(`user/checkId/${userId}`)
    .then((res) => {
      if (res.status === 200) {
        return alert("사용 가능한 아이디입니다");
      }
    })
    .catch((err) => {
      alert("중복된 아이디입니다");
    });
};

export const checkName = (userName) => {
  api
    .get(`user/checkname/${userName}`)
    .then((res) => {
      if (res.status === 200) {
        return alert("사용 가능한 닉네임입니다");
      }
    })
    .catch((err) => {
      alert("중복된 닉네임입니다");
    });
};
