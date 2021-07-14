import styled from "styled-components";

export const Container = styled.div`
  background: var(--black);
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  label {
    display: none;
  }
  h1 {
    color: var(--light-green);
    text-align: center;
  }
  form {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
  }
  input {
    border-radius: 10px;
    border: 1px solid gray;
    padding: 16px;
    margin-top: 10px;
    max-width: 25rem;
    font-size: 1rem;
  }
  span {
    color: #f0610f;
    font-weight: bold;
  }
  button {
    margin-top: 3rem;
  }
  @media only screen and (min-width: 768px) {
    label {
      color: var(--light-green);
    }
    button {
      width: 6rem;
    }
  }
`;
