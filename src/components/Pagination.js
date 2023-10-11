import React from "react";
import styled from "styled-components";

// 페이지 전체 개수 받아오기
const Pagination = ({ lastPage, pageNum, setPageNum }) => {
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
          setPageNum(1);
        }}
      >
        {"<<"}
      </StartArrow>
      <PrevArrow
        onClick={() => {
          if (pageNum > 1) {
            setPageNum(pageNum - 1);
          }
        }}
      >
        {"<"}
      </PrevArrow>
      {array.slice(offset, offset + 10).map((item, idx) => (
        <Emptydiv key={idx}>
          {pageNum === item ? (
            <ActivePageNumber
              onClick={() => {
                setPageNum(item);
              }}
            >
              {item}
            </ActivePageNumber>
          ) : (
            <PageNumber
              onClick={() => {
                setPageNum(item);
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
            setPageNum(pageNum + 1);
          }
        }}
      >
        {">"}
      </NextArrow>
      <LastArrow
        onClick={() => {
          setPageNum(lastPage);
        }}
      >
        {">>"}
      </LastArrow>
    </PagingBox>
  );
};

const PagingBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  margin: 1.5rem 0;
`;
const StartArrow = styled.span`
  cursor: pointer;
`;
const PrevArrow = styled.span`
  cursor: pointer;
`;
const Emptydiv = styled.div``;
const ActivePageNumber = styled.span`
  cursor: pointer;
  color: blue;
  font-weight: 600;
`;
const PageNumber = styled.span`
  cursor: pointer;
`;
const NextArrow = styled.span`
  cursor: pointer;
`;
const LastArrow = styled.span`
  cursor: pointer;
`;
export default Pagination;
