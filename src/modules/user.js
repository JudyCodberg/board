import axios from "axios";

const LOGIN = "login/LOGIN";

export const login = (userId, userPw, nav) => {
  return async (dispatch, getState) => {
    const user = await axios.post("/user/login", {
      id: userId,
      password: userPw,
    });
    try {
      const token = user.data.data.loginToken.token;
      const userId = user.data.data.loginToken.id;
      const username = user.data.data.username;
      dispatch({ type: LOGIN, payload: { username, token, userId } });
      nav("/board");
      return alert("로그인 성공");
    } catch (error) {
      alert("로그인 실패");
    }
  };
};

const getKey = JSON.parse(localStorage.getItem("persist:root"));
const init = {
  // 로컬스토리지에 값이 있으면 넣고 || 아니면 ""
  username: getKey !== undefined ? JSON.parse(getKey.user).username : "",
  userId: getKey !== undefined ? JSON.parse(getKey.user).userId : "",
  token: getKey !== undefined ? JSON.parse(getKey.user).token : "",
};

export default function user(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return {
        ...state,
        username: payload.username,
        userId: payload.userId,
        token: payload.token,
      };
    default:
      return { ...state };
  }
}
