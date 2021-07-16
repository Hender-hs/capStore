import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${(props) =>
    props.color === "black"
      ? "#000"
      : props.color === "green"
      ? "var(--green)"
      : "var(--light-green)"};
  color: ${(props) => (props.color === "black" ? "#FFF" : "#000")};
  width: ${(props) => (props.width ? props.width : `100%`)};
  height: ${(props) => (props.height ? props.height : `40px`)};
  border: 0;
  text-align: center;
  font-size: 1.2rem;
  border-radius: 10px;
  transition: 0.5s;
  padding: 10px 0;

  &:hover {
    filter: brightness(0.9);
  }
`;
