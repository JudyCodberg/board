/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getPostAll, getSearchAll, getDetail } from "../api/board_api";
import { getPageNumber, getsearchNumber } from "../modules/board";
import Pagination from "./Pagination";
import Search from "./Search";

const SHOW_ARTICLE_NUM = 10;

const boardTitles = ["번호", "제목", "조회수", "작성자", "작성일"];
const List = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [listData, setListData] = useState([]);
  const [articleNum, setArticleNum] = useState(0);

  const pageNum = useSelector((state) => state.board.pageNum);
  const target = useSelector((state) => state.board.target);
  const value = useSelector((state) => state.board.value);

  const getListData = async () => {
    const result = await getPostAll(pageNum, SHOW_ARTICLE_NUM);
    if (result === null || result === undefined) {
      setListData([]);
      return;
    }
    setListData(result.searchData);
    setArticleNum(result.countNum);
  };

  const getSearchData = async () => {
    const result = await getSearchAll(pageNum, SHOW_ARTICLE_NUM, target, value);
    if (result === null || result === undefined) {
      setListData([]);
      return;
    }
    setListData(result.searchData);
    setArticleNum(result.countNum);
  };
  const lastPage = Math.ceil(articleNum / SHOW_ARTICLE_NUM);

  const submitSearch = () => {
    dispatch(getPageNumber(1));
    dispatch(getsearchNumber(1, target, value));
    getSearchData();
  };

  useEffect(() => {
    if (target.length !== 0 && value.length !== 0) {
      getSearchData();
    } else {
      getListData();
    }
  }, [pageNum]);

  return (
    <ListWrap>
      <ListHeader>
        {boardTitles.map((item, idx) => (
          <ListTitle key={idx}>{item}</ListTitle>
        ))}
      </ListHeader>
      <ListBody>
        {listData.length === 0 ? (
          <EmptyList>{"데이터가 없습니다"}</EmptyList>
        ) : (
          <>
            {" "}
            {listData?.map((item, idx) => (
              <Lists key={idx}>
                <ListRows key={item.board_id} color={idx % 2 == 0 ? 1 : 0}>
                  <ListItems>{item.board_id}</ListItems>
                  <ListItemsTitle
                    onClick={() => {
                      getDetail(item.board_id, pageNum, SHOW_ARTICLE_NUM, target, value, nav);
                    }}
                  >
                    {item.title}
                    <CountComment>{item.comment_count !== 0 ? `(${item.comment_count})` : ""}</CountComment>
                  </ListItemsTitle>
                  <ListItems>{item.hits}</ListItems>
                  <ListItems>{item.writer}</ListItems>
                  <ListItems>{item.createdAt.slice(0, 10)}</ListItems>
                </ListRows>
              </Lists>
            ))}
          </>
        )}
      </ListBody>
      {listData.length !== 0 ? <Pagination lastPage={lastPage} countNum={SHOW_ARTICLE_NUM} /> : <></>}
      <Search countNum={SHOW_ARTICLE_NUM} submitSearch={submitSearch} />
    </ListWrap>
  );
};

const Lists = styled.div``;
const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 500px) {
    font-size: 0.85rem;
  }
`;
const ListHeader = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr repeat(3, 1fr);
  justify-items: start;
  padding: 0.5rem 0;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;
const ListTitle = styled.li`
  font-weight: 500;
`;
const ListBody = styled.div`
  width: 100%;
`;
const ListRows = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr repeat(3, 1fr);
  justify-items: start;
  padding: 0.5rem 0;
  background-color: ${(props) => (props.color === 1 ? "#eee" : "transparent")};
`;
const ListItems = styled.div`
  width: 90%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;
const ListItemsTitle = styled.div`
  cursor: pointer;
  width: 90%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;
const CountComment = styled.span`
  color: gray;
`;
const EmptyList = styled.div`
  width: 100%;
  padding: 2rem 0;
  text-align: center;
`;
export default List;
