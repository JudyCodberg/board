/* eslint-disable */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getPostAll, getSearchAll, getDetail } from "../api/board_api";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import Search from "./Search";

const SHOW_ARTICLE_NUM = 10;

const boardTitles = ["번호", "제목", "조회수", "작성자", "작성일"];
const List = () => {
  const nav = useNavigate();

  const [listData, setListData] = useState([]);
  const [articleNum, setArticleNum] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  const [searchValue, setSearchValue] = useState({
    target: 0,
    value: "",
  });

  const getListData = async () => {
    const result = await getPostAll(pageNum, SHOW_ARTICLE_NUM);
    setListData(result.searchData);
    setArticleNum(result.countNum);
  };

  const getSearchData = async () => {
    const result = await getSearchAll(pageNum, SHOW_ARTICLE_NUM, target, value);
    setListData(result.searchData);
    setArticleNum(result.countNum);
  };
  const lastPage = Math.ceil(articleNum / SHOW_ARTICLE_NUM);

  const { target, value } = searchValue;

  const submitSearch = () => {
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
        {listData.map((item, idx) => (
          <Lists key={idx}>
            <ListRows key={item.board_id} color={idx % 2 == 0 ? 1 : 0}>
              <ListItems>{item.board_id}</ListItems>
              <ListItemsTitle
                onClick={() => {
                  getDetail(item.board_id, nav);
                }}
              >
                {item.title}
                {item.comment_count !== 0 ? `(${item.comment_count})` : ""}
              </ListItemsTitle>
              <ListItems>{item.hits}</ListItems>
              <ListItems>{item.writer}</ListItems>
              <ListItems>{item.createdAt.slice(0, 10)}</ListItems>
            </ListRows>
          </Lists>
        ))}
      </ListBody>
      <Pagination lastPage={lastPage} pageNum={pageNum} setPageNum={setPageNum} countNum={SHOW_ARTICLE_NUM} />
      <Search
        countNum={SHOW_ARTICLE_NUM}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        submitSearch={submitSearch}
      />
    </ListWrap>
  );
};

const Lists = styled.div``;
const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
const ListItems = styled.div``;
const ListItemsTitle = styled.div`
  cursor: pointer;
  width: 90%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;
export default List;
