import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { decrease, getPageNumber, increase } from "../modules/board";

// 페이지 전체 개수 받아오기
const Pagination = ({ lastPage }) => {
  const dispatch = useDispatch();
  const pageNum = useSelector((state) => state.board.pageNum);

  const array = [];
  for (let i = 0; i < lastPage; i++) {
    array.push(i + 1);
  }

  const result = Math.floor((pageNum - 1) / 10);
  const offset = result * 10;

  return (
    <PagingBox>
      <StartArrow
        onClick={() => {
          dispatch(getPageNumber(1));
        }}
      >
        {pageNum === 1 ? "" : "<<"}
      </StartArrow>
      <PrevArrow
        onClick={() => {
          if (pageNum > 1) {
            dispatch(decrease());
          }
        }}
      >
        {pageNum === 1 ? "" : "<"}
      </PrevArrow>
      {array.slice(offset, offset + 10).map((item, idx) => (
        <Emptydiv key={idx}>
          {pageNum === item ? (
            <ActivePageNumber
              onClick={() => {
                dispatch(getPageNumber(item));
              }}
            >
              {item}
            </ActivePageNumber>
          ) : (
            <PageNumber
              onClick={() => {
                dispatch(getPageNumber(item));
              }}
            >
              {item}
            </PageNumber>
          )}
        </Emptydiv>
      ))}
      <NextArrow
        onClick={() => {
          if (pageNum < lastPage) {
            dispatch(increase());
          }
        }}
      >
        {pageNum === lastPage ? "" : ">"}
      </NextArrow>
      <LastArrow
        onClick={() => {
          dispatch(getPageNumber(lastPage));
        }}
      >
        {pageNum === lastPage ? "" : ">>"}
      </LastArrow>
    </PagingBox>
  );
};

const PagingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  width: 70%;
  margin: 1.5rem 0;
  @media screen and (max-width: 500px) {
    gap: 0.5rem;
  }
`;
const StartArrow = styled.span`
  cursor: pointer;
  @media screen and (max-width: 500px) {
    font-size: 0.75rem;
  }
`;
const PrevArrow = styled.span`
  cursor: pointer;
  @media screen and (max-width: 500px) {
    font-size: 0.75rem;
  }
`;
const Emptydiv = styled.div``;
const ActivePageNumber = styled.span`
  cursor: pointer;
  color: blue;
  font-weight: 600;
  @media screen and (max-width: 500px) {
    font-size: 0.75rem;
  }
`;
const PageNumber = styled.span`
  cursor: pointer;

  @media screen and (max-width: 500px) {
    font-size: 0.75rem;
  }
`;
const NextArrow = styled.span`
  cursor: pointer;
  @media screen and (max-width: 500px) {
    font-size: 0.75rem;
  }
`;
const LastArrow = styled.span`
  cursor: pointer;
  @media screen and (max-width: 500px) {
    font-size: 0.75rem;
  }
`;
export default Pagination;
