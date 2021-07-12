import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${(props) =>
    props.color === "black"
      ? "#000"
      : props.color === "green"
      ? "var(--green)"
      : "var(--light-green)"};
  ${(props) => (props.width ? props.width : `width: 100%`)};

  ${(props) => (props.height ? props.height : `height: 40px`)};
  
  border: 0;

`;
