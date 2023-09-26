import styled from "styled-components";
import Button from "./Button";

const JoinInputs = () => {
  return (
    <Wrapper>
      <TitleBox>
        <InputTitle>아이디</InputTitle>
        <Button title="중복확인" />
      </TitleBox>
      <InputBox />
      <TitleBox>
        <InputTitle>닉네임</InputTitle>
        <Button title="중복확인" />
      </TitleBox>
      <InputBox />
      <InputTitle>비밀번호</InputTitle>
      <InputPassword type="password" />
      <InputTitle>비밀번호 확인</InputTitle>
      <InputPassword type="password" />
      <InputTitle>비밀번호 찾기 질문</InputTitle>
      <QuestionTitle>Q.비밀번호 찾기 질문입니다.</QuestionTitle>
      <InputBox />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 15rem;
  margin: 1rem 0;
`;
const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const InputTitle = styled.p`
  margin: 0.25rem 0;
`;
const InputBox = styled.input`
  width: 100%;
  height: 1.5rem;
  font-family: Pretendard;
`;
const InputPassword = styled.input`
  width: 100%;
  height: 1.5rem;
  font-family: Pretendard;
`;
const QuestionTitle = styled.p``;
export default JoinInputs;
