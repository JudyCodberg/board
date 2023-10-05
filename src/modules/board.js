import axios from "axios";

const init = {
  lists: [],
};

export const getPostAll = (pageNum, SHOW_ARTICLE_NUM) => {
  return async (dispatch, getState) => {
    const post = await axios.get("/board/list", { params: { page: pageNum, num: SHOW_ARTICLE_NUM } });
    const { getList, boardCountAll } = post.data.data;
    dispatch({ type: "GET_POST", payload: { getList, boardCountAll } });
  };
};

export default function board(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case "GET_POST": {
      return {
        ...state,
        lists: [...payload.getList],
        counts: payload.boardCountAll,
      };
    }

    default:
      return { ...state };
  }
}
