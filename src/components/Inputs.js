import styled from "styled-components";

const JoinInputs = () => {
  return (
    <Wrapper>
      <InputTitle>아이디</InputTitle>
      <InputId />
      <InputTitle>비밀번호</InputTitle>
      <InputPassword type="password" />
    </Wrapper>
  );
};

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
export default JoinInputs;
