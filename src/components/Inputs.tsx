import styled from "styled-components";

const JoinInputs = () => {
  return (
    <Wrapper>
      <InputTitle>ID</InputTitle>
      <InputId></InputId>
      <InputTitle>PASSWORD</InputTitle>
      <InputId></InputId>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const InputTitle = styled.p``;
const InputId = styled.input``;
export default JoinInputs;
