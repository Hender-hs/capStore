import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px 20px 0 0;
  background: linear-gradient(var(--black), var(--gray));
  height: 70%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
`;

export const Wrapper = styled.div`
  height: 100vh;
`;

export const RegisterButton = styled.button`
  background-color: transparent;
  color: lightblue;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Roboto Condensed', sans-serif;
`;

export const InputDiv = styled.div`
  height: 110px;
`;

export const Title = styled.h3`
  color: #fff;
  margin: 10px;
  font-size: 1.7rem;
`;