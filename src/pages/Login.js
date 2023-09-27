import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { userLogin } from "../api/user";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const submitLogin = (userId, userPw) => {
    userLogin(userId, userPw);
  };
  return (
    <PageContainer>
      <PageBox>
        <PageTitle>로그인</PageTitle>
        <Wrapper>
          <InputTitle>아이디</InputTitle>
          <InputId
            onChange={(e) => {
              setUserId(e.target.value);
            }}
          />
          <InputTitle>비밀번호</InputTitle>
          <InputPassword
            type="password"
            onChange={(e) => {
              setUserPw(e.target.value);
            }}
          />
        </Wrapper>
        <ButtonBox>
          <RegularButton
            onClick={() => {
              submitLogin(userId, userPw);
            }}
          >
            로그인
          </RegularButton>
          <Link to="/join">
            <RegularButton>회원가입</RegularButton>
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
const Wrapper = styled.div`
  width: 15rem;
  margin: 1rem 0;
`;
const InputTitle = styled.p`
  margin: 0.25rem 0;
`;
const InputId = styled.input`
  width: 100%;
  height: 1.5rem;
  font-family: Pretendard;
`;
const InputPassword = styled.input`
  width: 100%;
  height: 1.5rem;
  font-family: Pretendard;
`;
const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
const RegularButton = styled.div`
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
export default Login;
