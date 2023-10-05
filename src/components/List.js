/* eslint-disable */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getPostAll } from "../modules/board";
import { getBoardList, getDetail } from "../api/board";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

const boardTitles = ["번호", "제목", "댓글수", "조회수", "작성자", "작성일"];
const List = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const SHOW_ARTICLE_NUM = 17;
  const [pageNum, setPageNum] = useState(1);

  const listData = useSelector((state) => state.board.lists);
  const articleNum = useSelector((state) => state.board.counts);

  const lastPage = Math.ceil(articleNum / SHOW_ARTICLE_NUM);
  useEffect(() => {
    dispatch(getPostAll(pageNum, SHOW_ARTICLE_NUM));
  }, [pageNum]);

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
      <Pagination lastPage={lastPage} pageNum={pageNum} setPageNum={setPageNum} countNum={SHOW_ARTICLE_NUM} />
    </ListWrap>
  );
};
const Lists = styled.div``;
const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
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
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: start;
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
