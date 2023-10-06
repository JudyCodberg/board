// import axios from "axios";

// const init = {
//   lists: [],
// };

// export const getPostAll = (pageNum, SHOW_ARTICLE_NUM) => {
//   return async (dispatch, getState) => {
//     const post = await axios.get("/board/list", { params: { page: pageNum, num: SHOW_ARTICLE_NUM } });
//     const { getList, boardCountAll } = post.data.data;
//     dispatch({ type: "GET_POST", payload: { getList, boardCountAll } });
//   };
// };

// export const getSearchAll = (pageNum, SHOW_ARTICLE_NUM, target, value) => {
//   return async (dispatch, getState) => {
//     await axios
//       .get("board/list", {
//         params: {
//           page: pageNum,
//           num: SHOW_ARTICLE_NUM,
//           target: target,
//           value: value,
//         },
//       })
//       .then((res) => {
//         const searchData = res?.data?.data?.searchData;
//         const countNum = res?.data?.data?.countNum;
//         dispatch({ type: "GET_RESULT", payload: { searchData, countNum } });
//       })
//       .catch((err) => {
//         console.log(err);
//         alert("검색 결과가 없습니다");
//       });
//   };
// };

// export default function board(state = init, action) {
//   const { type, payload } = action;
//   switch (type) {
//     case "GET_POST": {
//       return {
//         ...state,
//         lists: [...payload.getList],
//         counts: payload.boardCountAll,
//       };
//     }

//     case "GET_RESULT": {
//       return {
//         ...state,
//         lists: [...payload.searchData],
//         counts: payload.countNum,
//       };
//     }

//     default:
//       return { ...state };
//   }
// }
