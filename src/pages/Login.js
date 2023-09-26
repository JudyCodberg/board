import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import Inputs from "../components/Inputs";

const Login = () => {
  return (
    <PageContainer>
      <PageBox>
        <PageTitle>로그인</PageTitle>
        <Inputs />
        <ButtonBox>
          <Link to="/board">
            <Button title="로그인" />
          </Link>
          <Link to="/join">
            <Button title="회원가입" />
          </Link>
        </ButtonBox>
      </PageBox>
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
const PageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const PageTitle = styled.p`
  font-weight: 700;
  font-size: 2rem;
`;
const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
export default Login;
