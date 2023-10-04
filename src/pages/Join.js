import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useRef, useState } from "react";
import { checkId, checkName, userJoin } from "../api/user";

const QUESTION = [
  { id: 1, question: "어릴 때 살던 동네는?" },
  { id: 2, question: "가장 아끼는 보물 1호는?" },
  { id: 3, question: "기억에 남는 장소는?" },
];

const Join = () => {
  const pwRef = useRef();
  const nav = useNavigate();

  const [userValidate, setUserValidate] = useState({
    id: false,
    name: false,
    password: false,
    question: true,
    answer: false,
    checkOverlapId: false,
    checkOverlapName: false,
    checkOverlapPw: false,
  });

  const [userInputs, setUserInputs] = useState({
    id: "",
    name: "",
    password: "",
    question: "",
    answer: "",
  });

  // 정규식
  const regs = {
    id: /^[a-z]+[a-z0-9]{5,19}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/,
    name: /^[가-힣a-zA-Z]{2,8}$/,
  };
  const checkValidate = (regExp, value) => regExp.test(value);

  // 아이디/닉네임 중복체크
  const checkIdValidate = async (userId) => {
    if (userId.trim().length === 0) {
      alert("아이디를 입력하세요");
      return false;
    }
    if (checkValidate(regs.id, userId) !== true) {
      alert("영문자로 시작하는 영문자 또는 숫자 6~20자");
      return false;
    }
    const result = await checkId(userId);
    if (result === true) {
      setUserValidate({ ...userValidate, checkOverlapId: result });
      alert("사용 가능한 아이디입니다");
    }
    return setUserValidate({ ...userValidate, checkOverlapId: result });
  };

  const checkNameValidate = async (userName) => {
    if (userName.trim().length === 0) {
      alert("닉네임을 입력하세요");
      return false;
    }
    if (checkValidate(regs.name, userName) !== true) {
      alert("한글 또는 영문자 2~8자");
      return false;
    }
    const result = await checkName(userName);
    if (result === true) {
      setUserValidate({ ...userValidate, checkOverlapName: result });
      alert("사용 가능한 닉네임입니다");
    }
    return setUserValidate({ ...userValidate, checkOverlapName: result });
  };

  const userInputsHandler = (e) => {
    const { name, value } = e.target;
    setUserInputs({ ...userInputs, [name]: value });
    setUserValidate({
      ...userValidate,
      [name]: checkValidate(regs[name], value),
    });
  };

  // 비밀번호 확인
  const checkPwValidate = (value) => {
    let result;
    if (userInputs.password) {
      const comparePw = userInputs.password;
      if (comparePw === value) {
        pwRef.current.style.border = "1px solid black";
        result = true;
      } else {
        pwRef.current.style.border = "2px solid red";
        result = false;
      }
      setUserValidate({ ...userValidate, checkOverlapPw: result });
    } else {
      setUserValidate({ ...userValidate, checkOverlapPw: false });
    }
  };

  const checkQnA = (e) => {
    const { value, name } = e.target;
    if (value.length !== 0) {
      setUserInputs({ ...userInputs, [name]: value });
      setUserValidate({ ...userValidate, [name]: true });
    } else return setUserValidate({ ...userValidate, [name]: false });
  };

  // 가입하기 눌렀을 때
  const submitJoin = () => {
    const { id, name, password, question, answer } = userInputs;
    if (userValidate.checkOverlapId === false || userValidate.checkOverlapName === false)
      return alert("중복 검사는 필수입니다");
    if (userValidate.id === false || userValidate.name === false) return alert("유효하지 않은 값입니다");
    if (userValidate.checkOverlapPw === false || userValidate.password === false)
      return alert("비밀번호를 다시 확인해주세요");
    if (userValidate.answer === false) {
      return alert("답변을 입력하세요");
    }
    const isAllTrue = Object.values(userValidate).every((value) => value);
    if (isAllTrue) return userJoin(id, name, password, question, answer, nav);
  };

  return (
    <PageContainer>
      <PageBox>
        <PageTitle>회원가입</PageTitle>
        <Wrapper>
          <TitleBox>
            <InputTitle>아이디</InputTitle>
            <Button
              onClick={() => {
                checkIdValidate(userInputs.id);
              }}
            >
              중복확인
            </Button>
          </TitleBox>
          <InputBox
            name="id"
            onChange={(e) => {
              userInputsHandler(e);
            }}
          />
          <CheckResult>영어로 시작, 영어 및 숫자 6~20자</CheckResult>
          <TitleBox>
            <InputTitle>닉네임</InputTitle>
            <Button
              onClick={() => {
                checkNameValidate(userInputs.name);
              }}
            >
              중복확인
            </Button>
          </TitleBox>
          <InputBox
            name="name"
            onChange={(e) => {
              userInputsHandler(e);
            }}
          />
          <CheckResult>한글 또는 영문자 2~8자(자음만 입력 불가능)</CheckResult>
          <InputTitle>비밀번호</InputTitle>
          <InputPassword
            type="password"
            maxLength={16}
            name="password"
            onChange={(e) => {
              userInputsHandler(e);
            }}
          />
          <CheckResult>대문자/소문자/숫자/특수문자 반드시 하나 이상 포함(최소 8자)</CheckResult>
          <InputTitle>비밀번호 확인</InputTitle>
          <CheckPassword
            ref={pwRef}
            type="password"
            maxLength={16}
            onChange={(e) => {
              checkPwValidate(e.target.value);
            }}
          />
          <InputTitle>비밀번호 찾기 질문</InputTitle>
          <QuestionBox
            name="question"
            onChange={(e) => {
              checkQnA(e);
            }}
          >
            {QUESTION.map((item) => (
              <QuestionTitle key={item.id} value={item.id}>
                {item.question}
              </QuestionTitle>
            ))}
          </QuestionBox>
          <InputBox
            name="answer"
            onChange={(e) => {
              checkQnA(e);
            }}
          />
        </Wrapper>
        <Button
          onClick={() => {
            submitJoin(userInputs, nav);
          }}
        >
          가입하기
        </Button>
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
  /* border: ${(props) => (props.validate == 1 ? "1px solid black" : "1px solid red")}; */
`;
const CheckResult = styled.p`
  font-size: 0.75rem;
  padding-bottom: 0.5rem;
`;
const QuestionBox = styled.select``;
const QuestionTitle = styled.option``;

export default Join;
