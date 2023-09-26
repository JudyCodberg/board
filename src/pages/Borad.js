import React from "react";
import styled from "styled-components";
import List from "../components/List";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Borad = () => {
  return (
    <PageContainer>
      <TitlerArea>
        <PageTitle>게시판</PageTitle>
        <RightArea>
          <Link to="/">
            <Button title="로그아웃" />
          </Link>
          <Link to="/write">
            <Button title="글쓰기" />
          </Link>
        </RightArea>
      </TitlerArea>
      <BoardContainer>
        <List />
      </BoardContainer>
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
const BoardContainer = styled.div`
  width: 70%;
  height: 70%;
`;
export default Borad;
