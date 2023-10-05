/* eslint-disable */
import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getPostAll } from "../modules/board";
import { getDetail } from "../api/board";
import { useNavigate } from "react-router-dom";

const boardTitles = ["번호", "제목", "댓글수", "조회수", "작성자", "작성일"];
const List = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const listData = useSelector((state) => state.board.lists);

  useEffect(() => {
    const pageNum = 1;
    const numbers = 5;
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
        {listData.map((item, idx) => (
          <Lists key={idx}>
            <ListRows key={item.board_id}>
              <ListItems>{item.board_id}</ListItems>
              <ListItemsTitle
                onClick={() => {
                  getDetail(item.board_id, nav);
                }}
              >
                {item.title}
              </ListItemsTitle>
              <ListItems>{item.comment_count}</ListItems>
              <ListItems>{item.hits}</ListItems>
              <ListItems>{item.writer}</ListItems>
              <ListItems>{item.createdAt.slice(0, 10)}</ListItems>
            </ListRows>
          </Lists>
        ))}
      </ListBody>
    </ListWrap>
  );
};
const Lists = styled.div``;
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
const ListItemsTitle = styled.div`
  cursor: pointer;
  padding-left: 1rem;
`;
export default List;
