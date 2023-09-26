import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Write = () => {
  return (
    <PageContainer>
      <TitlerArea>
        <PageTitle>글쓰기</PageTitle>
        <RightArea>
          <Link to="/board">
            <Button title="취소" />
          </Link>
          <Link to="/write">
            <Button title="등록하기" />
          </Link>
        </RightArea>
      </TitlerArea>
      <BoardContainer></BoardContainer>
    </PageContainer>
  );
};
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-family: Pretendard;
`;
const TitlerArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
`;
const RightArea = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const PageTitle = styled.p`
  margin: 1rem 0;
  font-weight: 700;
  font-size: 2rem;
`;
const BoardContainer = styled.textarea`
  width: 70%;
  height: 70%;
  border: 1px solid black;
  resize: none;
`;
export default Write;
