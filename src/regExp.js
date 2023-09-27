// 아이디
// 영문자로 시작하는 영문자 또는 숫자 6~20자
export const regId = (asValue) => {
  var regExp = /^[a-z]+[a-z0-9]{5,19}$/g;
  return regExp.test(asValue);
};
// 비밀번호
// 8-16자 영문, 특수문자, 숫자 최소 한 가지씩
export const regPw = (asValue) => {
  var regExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/g;

  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
};
