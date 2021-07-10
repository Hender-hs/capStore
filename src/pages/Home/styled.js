import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: black;
  height: 100vh;
  span {
    font-family: "Roboto Condensed", sans-serif;
    font-weight: bold;
  }
  p {
    font-weight: bold;
    font-size: 1.2rem;
  }

  input {
    background: none;
    border-radius: 15px;
    border: 1px solid white;
    height: 3rem;
    width: 15rem;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
  }

  h4,
  h1 {
    font-weight: bold;
    color: var(--light-green);
  }

  h1 {
    position: absolute;
    top: 6.25rem;
  }

  div,
  .slider,
  .slider-frame {
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Card = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  width: 12.5rem;
  height: 15rem;
  margin: 8rem auto;
  background: white;
  border-radius: 5px;
  border: 1px solid var(--gray);
  img {
    width: 6.2rem;
    height: 6.2rem;
  }
  button {
    margin-top: 4.5rem;
    background: var(--light-green);
    width: 4rem;
    height: 2rem;
    border: 1px solid var(--light-green);
    border-radius: 5px;
    font-weight: bold;
    padding: 2px;
    font-family: "Roboto Condensed", sans-serif;
  }
`;
