import axios from "axios";
const LOGIN = "login/LOGIN";
export const login = (userId, userPw, nav) => {
  return async (dispatch, getState) => {
    const user = await axios.post("/user/login", {
      id: userId,
      password: userPw,
    });
    try {
      const nickname = user.data.data[0].nickname;
      dispatch({ type: LOGIN, payload: nickname });
      nav("/board");
      return alert("로그인 성공");
    } catch (error) {
      alert("로그인 실패");
    }
  };
};
const init = {
  username: "",
};

export default function user(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return {
        ...state,
        username: payload,
      };
    default:
      return { ...state };
  }
}
