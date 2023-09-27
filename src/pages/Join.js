import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { checkId, checkName } from "../api/user";
import { regId, regPw } from "../regExp";

const QUESTION = [
  { id: 1, question: "어릴 때 살던 동네는?" },
  { id: 2, question: "가장 아끼는 보물 1호는?" },
  { id: 3, question: "기억에 남는 장소는?" },
];
const Join = () => {
  const nav = useNavigate();
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userPw, setUserPw] = useState("");
  const [checkPw, setCheckPw] = useState("");
  const [checkId, setCheckId] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [isSame, setIsSame] = useState(0);
  const [questionNum, setQuestionNum] = useState(1);

  // 아이디/닉네임 중복체크
  const checkIdValidate = (userId) => {
    if (userId.trim().length === 0) return alert("아이디를 입력하세요");
    checkId(userId);
  };
  const checkNameValidate = (userName) => {
    if (userName.trim().length === 0) return alert("닉네임을 입력하세요");
    checkName(userName);
  };
  // 정규식 검사
  const handleId = (value) => {
    if (regId(value) === false) {
      return console.log("영문자로 시작하는 영문자 또는 숫자 6~20자");
    } else return console.log("정규식 검사 통과");
  };
  const handlePw = (value) => {
    if (regPw(value) === false) {
      return console.log("8-16자 영문(대/소문자), 특수문자, 숫자 최소 한 가지씩");
    } else return console.log("정규식 검사 통과");
  };
  // 비밀번호 확인
  const checkPwValidate = (value) => {
    if (userPw == value) {
      setIsSame(1);
    } else {
      setIsSame(0);
    }
  };
  // 비밀번호 찾기
  const selectQuetion = (e) => {
    setQuestionNum(e.target.value);
  };

  // 가입하기 눌렀을 때
  const submitJoin = () => {};
  return (
    <PageContainer>
      <PageBox>
        <PageTitle>회원가입</PageTitle>
        <Wrapper>
          <TitleBox>
            <InputTitle>아이디</InputTitle>
            <Button
              onClick={() => {
                checkIdValidate(userId);
              }}
            >
              중복확인
            </Button>
          </TitleBox>
          <InputBox
            onChange={(e) => {
              handleId(e.target.value);
            }}
          />{" "}
          <CheckResult>영문자로 시작하는 영문자 또는 숫자 6~20자</CheckResult>
          <TitleBox>
            <InputTitle>닉네임</InputTitle>
            <Button
              onClick={() => {
                checkNameValidate(userName);
              }}
            >
              중복확인
            </Button>
          </TitleBox>
          <InputBox
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <InputTitle>비밀번호</InputTitle>
          <InputPassword
            type="password"
            maxLength={16}
            onChange={(e) => {
              handlePw(e.target.value);
            }}
          />
          <CheckResult>8-16자 영문, 특수문자, 숫자 최소 한 가지씩</CheckResult>
          <InputTitle>비밀번호 확인</InputTitle>
          <CheckPassword
            validate={isSame}
            type="password"
            maxLength={16}
            onChange={(e) => {
              checkPwValidate(e.target.value);
            }}
          />
          <InputTitle>비밀번호 찾기 질문</InputTitle>
          <QuestionBox onChange={selectQuetion}>
            {QUESTION.map((item) => (
              <QuestionTitle key={item.id} value={item.id}>
                {item.question}
              </QuestionTitle>
            ))}
          </QuestionBox>
          <InputBox
            onChange={(e) => {
              setUserAnswer(e.target.value);
            }}
          />
        </Wrapper>
        <Link to="/board">
          <Button
            onClick={() => {
              submitJoin();
            }}
          >
            가입하기
          </Button>
        </Link>
      </PageBox>
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
const CheckPassword = styled.input`
  width: 100%;
  height: 1.5rem;
  font-family: Pretendard;
  border: ${(props) => (props.validate == 1 ? "1px solid black" : "1px solid red")};
`;
const CheckResult = styled.p`
  font-size: 0.75rem;
  padding-bottom: 0.5rem;
`;
const QuestionBox = styled.select``;
const QuestionTitle = styled.option``;

export default Join;
