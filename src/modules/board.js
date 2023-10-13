const INCREASE_NUM = "board/INCREASE_NUM";
const DRCREASE_NUM = "board/DRCREASE_NUM";
const IS_PAGENUM = "board/IS_PAGENUM";
const IS_SEARCHNUM = "board/IS_SEARCHNUM";

export const increase = () => {
  return {
    type: INCREASE_NUM,
  };
};

export const decrease = () => {
  return {
    type: DRCREASE_NUM,
  };
};

export const getPageNumber = (pageNum) => {
  return { type: IS_PAGENUM, payload: { pageNum } };
};

export const getsearchNumber = (pageNum, target, value) => {
  return { type: IS_SEARCHNUM, payload: { pageNum, target, value } };
};
const init = {
  pageNum: 1,
  target: 0,
  value: "",
};

export default function board(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case DRCREASE_NUM: {
      return {
        pageNum: state.pageNum - 1,
      };
    }

    case INCREASE_NUM: {
      return {
        pageNum: state.pageNum + 1,
      };
    }

    case IS_PAGENUM: {
      return {
        ...state,
        pageNum: payload?.pageNum,
      };
    }

    case IS_SEARCHNUM: {
      return {
        ...state,
        pageNum: payload?.pageNum,
        target: payload?.target,
        value: payload?.value,
      };
    }

    default:
      return { ...state };
  }
}
