import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--black);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > button {
    margin: 0 auto;
    margin-bottom: 50px;
    border-radius: 10px;
  }
`;
