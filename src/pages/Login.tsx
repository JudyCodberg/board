import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import Inputs from "../components/Inputs";

const Login = () => {
  return (
    <PageContainer>
      <PageTitle>Login</PageTitle>
      <Inputs />
      <ButtonBox>
        <Button title="login" />
        <Link to="/join">
          <Button title="join" />
        </Link>
      </ButtonBox>
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
`;
const PageTitle = styled.p``;
const ButtonBox = styled.div`
  display: flex;
`;
export default Login;
