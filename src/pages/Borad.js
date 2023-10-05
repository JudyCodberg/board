import React from "react";
import styled from "styled-components";
import List from "../components/List";
import { Link } from "react-router-dom";

const Borad = () => {
  return (
    <PageContainer>
      <TitlerArea>
        <PageTitle>게시판</PageTitle>
        <RightArea>
          <Link to="/">
            <Button>로그아웃</Button>
          </Link>
          <Link to="/write">
            <Button>글쓰기</Button>
          </Link>
        </RightArea>
      </TitlerArea>
      <BoardContainer>
        <List />
      </BoardContainer>
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
const BoardContainer = styled.div`
  width: 70%;
  height: 70%;
`;
export default Borad;