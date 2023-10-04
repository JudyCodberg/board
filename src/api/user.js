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
  return api
    .get(`user/checkId/${userId}`)
    .then((res) => {
      if (res.status === 200) {
        return true;
      }
    })
    .catch((err) => {
      alert("중복된 아이디입니다");
      return false;
    });
};

export const checkName = (userName) => {
  return api
    .get(`user/checkname/${userName}`)
    .then((res) => {
      if (res.status === 200) {
        return true;
      }
    })
    .catch((err) => {
      alert("중복된 닉네임입니다");
      return false;
    });
};

export const userJoin = (id, name, password, question, answer, nav) => {
  api
    .post("user/join", {
      id: id,
      nickname: name,
      password: password,
      question: Number(question),
      answer: answer,
    })
    .then((res) => {
      if (res.status === 200) {
        alert("가입 완료");
        nav("/board");
      }
    })
    .catch((err) => {
      alert("가입 실패");
      return false;
    });
};
