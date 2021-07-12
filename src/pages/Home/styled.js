import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--black);
  height: 100vh;
  input {
    background: none;
    border-radius: 15px;
    border: 1px solid white;
    height: 2rem;
    color: white;
    text-align: center;
  }
  h1 {
    color: var(--light-green);
  }
  polygon {
    fill: var(--light-green);
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  width: 12.5rem;
  height: 10.75rem;
  margin-left: 25%;
  background: white;
  border: 1px solid var(--gray);
  border-radius: 5px;
  img {
    width: 6.2rem;
    height: 6.2rem;
  }
`;
