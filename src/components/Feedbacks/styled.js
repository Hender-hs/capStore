import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 80%;
  margin: 0 auto;
  border-radius: 15px;
  
  > :first-child {
    display: flex;
    justify-content: space-between;
  }
  button {
    color: white;
  }
  h3 {
    color: white
  }
`;
