import styled from "styled-components";

export const Container = styled.div`
  background: var(--black);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  padding-top: 100px;
  border-radius: 10px;

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
    padding: 20px 70px;

    label {
      color: var(--light-green);
    }
    button {
      width: 6rem;
    }
  }
`;

export const RegisterContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background: linear-gradient(var(--black), var(--gray));

  .animation {
    padding: 0 40px;
    border-radius: 10px;
    height: 589px;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;
