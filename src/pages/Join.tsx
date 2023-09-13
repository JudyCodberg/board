import { Link } from "react-router-dom";
import Inputs from "../components/Inputs";
import Button from "../components/Button";
import styled from "styled-components";

const Join = () => {
  return (
    <PageContainer>
      <PageTitle>Join</PageTitle>
      <Inputs />
      <Link to="/">
        <Button title="join" />
      </Link>
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

export default Join;
