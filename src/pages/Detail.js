import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { handleDelete } from "../api/board";

const Detail = () => {
  const nav = useNavigate();
  const location = useLocation();

  const data = location.state.data;
  const boardId = data.board_id;

  const [isDate, setIsDate] = useState("");

  useEffect(() => {
    setIsDate(new Date(data.createdAt).toLocaleString());
  }, [data.createdAt]);

  // TODO: 더미데이터, 세션에 저장된 유저 정보 가져와서 비교
  const loginedUser = "judy";

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>{data.title}</PageTitle>
      </PageHeader>
      <ArticleDetails>
        <RightArea>작성자 : {data.writer}</RightArea>
        <RightArea>작성일 : {isDate}</RightArea>
      </ArticleDetails>
      <ContentArea>{data.content}</ContentArea>
      {data.writer === loginedUser ? (
        <PageBottom>
          <Button
            onClick={() => {
              nav(`/board/${boardId}/edit`, {
                state: {
                  data: data,
                },
              });
            }}
          >
            수정
          </Button>
          <Button
            onClick={() => {
              handleDelete(boardId, nav);
            }}
          >
            삭제
          </Button>
        </PageBottom>
      ) : (
        <></>
      )}
    </PageContainer>
  );
};
const Button = styled.div`
  cursor: pointer;
  width: fit-content;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #d0d0d0;
  font-family: Pretendard;
  font-size: 0.75rem;
  &:hover {
    color: white;
    background-color: gray;
  }
`;
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100vw;
  height: 100vh;
  font-family: Pretendard;
`;
const PageBottom = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;
const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
`;
const RightArea = styled.p``;
const ArticleDetails = styled.div`
  display: flex;
  gap: 1rem;
  width: 70%;
  text-align: left;
  font-size: 0.75rem;
`;
const PageTitle = styled.p`
  font-weight: 700;
  font-size: 2rem;
`;
const ContentArea = styled.div`
  width: 70%;
  height: 70%;
  padding: 1rem;
  border: 1px solid black;
  line-height: 1.25rem;
  resize: none;
`;
export default Detail;
