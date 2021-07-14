import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    background: none;
    border-radius: 15px;
    border: 1px solid white;
    color: white;
    text-align: center;
    margin-left: 2rem;
  }
  svg {
    color: white;
  }
  div {
    border: none;
  }
  h1 {
    color: var(--light-green);
  }
  polygon {
    fill: var(--light-green);
  }
  div .slide .current {
    background: yellow;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  width: 12.5rem;
  height: 12.75rem;
  margin: 0 auto;
  margin-top: 6rem;
  margin-left: 25%;
  background: white;
  border: 1px solid var(--gray);
  border-radius: 5px;
  img {
    width: 6.2rem;
    height: 6.2rem;
  }
  button {
    position: relative;
    border-radius: 5px;
    margin-top: 2rem;
  }
`;

export const CardS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  width: 12.5rem;
  height: 12.75rem;
  margin-top: 8rem;
  margin-left: 25%;
  background: white;
  border: 1px solid var(--gray);
  border-radius: 5px;
  img {
    width: 6.2rem;
    height: 6.2rem;
  }
  button {
    position: relative;
    border-radius: 5px;
    margin-top: 2rem;
  }
`;
