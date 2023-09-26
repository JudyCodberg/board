import React, { useEffect } from "react";

// 페이지 전체 개수 받아오기
const Pagination = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  useEffect(() => {
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
    }
  }, []);
  return <div></div>;
};

export default Pagination;
