import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getPostAll } from "../modules/board";

const boardTitles = ["번호", "제목", "댓글수", "조회수", "작성자", "작성일"];
const List = () => {
  const dispatch = useDispatch();

  const listData = useSelector((state) => state.board.lists);

  useEffect(() => {
    const pageNum = 2;
    const numbers = 10;
    dispatch(getPostAll(pageNum, numbers));
  }, []);

  return (
    <ListWrap>
      <ListHeader>
        {boardTitles.map((item, idx) => (
          <ListTitle key={idx}>{item}</ListTitle>
        ))}
      </ListHeader>
      <ListBody>
        {listData?.map((item, idx) => (
          <ListRows key={item.board_id}>
            <ListItems>{item.board_id}</ListItems>
            <ListItems>{item.title}</ListItems>
            <ListItems>{item.comment_count}</ListItems>
            <ListItems>{item.hits}</ListItems>
            <ListItems>{item.writer}</ListItems>
            <ListItems>{item.createdAt.slice(0, 10)}</ListItems>
          </ListRows>
        ))}
      </ListBody>
    </ListWrap>
  );
};
const ListWrap = styled.div``;
const ListHeader = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;
const ListTitle = styled.li`
  font-weight: 500;
`;
const ListBody = styled.div`
  padding: 1rem 0;
`;
const ListRows = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem 0;
`;
const ListItems = styled.div`
  padding-left: 1rem;
`;
export default List;
