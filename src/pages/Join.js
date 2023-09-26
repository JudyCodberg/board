import { Link } from "react-router-dom";
import Button from "../components/Button";
import styled from "styled-components";
import JoinInputs from "../components/JoinInputs";

const Join = () => {
  return (
    <PageContainer>
      <PageBox>
        <PageTitle>회원가입</PageTitle>
        <JoinInputs />
        <Link to="/board">
          <Button title="가입하기" />
        </Link>
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
export default Join;
