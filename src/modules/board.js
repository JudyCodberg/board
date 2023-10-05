import axios from "axios";

const init = {
  lists: [],
};

export const getPostAll = (pageNum, numbers) => {
  return async (dispatch, getState) => {
    const post = await axios.get("/board/list", { params: { page: pageNum, num: numbers } });
    const { data } = post;
    dispatch({ type: "GET_POST", payload: data.data });
  };
};

export default function board(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case "GET_POST": {
      return {
        ...state,
        lists: [...payload],
      };
    }

    default:
      return { ...state };
  }
}
