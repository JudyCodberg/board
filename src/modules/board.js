const INCREASE_NUM = "board/INCREASE_NUM";
const DRCREASE_NUM = "board/DRCREASE_NUM";
const IS_PAGENUM = "board/IS_PAGENUM";
const IS_SEARCHNUM = "board/IS_SEARCHNUM";
const SEARCH_TARGET = "board/SEARCH_TARGET";
const SEARCH_VALUE = "board/SEARCH_VALUE";

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

export const getsearchTarget = (target) => {
  return { type: SEARCH_TARGET, payload: { target } };
};

export const getsearchValue = (value) => {
  return { type: SEARCH_VALUE, payload: { value } };
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

    case SEARCH_TARGET: {
      return {
        ...state,
        target: payload?.target,
      };
    }

    case SEARCH_VALUE: {
      return {
        ...state,
        value: payload?.value,
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
