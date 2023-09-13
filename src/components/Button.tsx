import styled from "styled-components";
export interface Props {
  title: string;
}
const Button = (props: Props) => {
  const { title } = props;
  return <RegularButton>{title}</RegularButton>;
};

const RegularButton = styled.button``;
export default Button;
