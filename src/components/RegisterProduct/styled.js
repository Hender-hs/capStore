import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 100%;
  & p {
    margin-top: 0.5rem;
    font-size: 1rem;
  }
  h2 {
    font-size: 2rem;
    color: var(--light-green);
  }
  form {
    display: flex;
    flex-direction: column;
    width: 90%;
    > button {
      :hover,
      :focus {
        background-color: var(--purple);
      }
    }
  }
  @media only screen and (min-width: 768px) {
    background-color: var(--purplePink);
    width: 28vw;
    margin-right: 1rem;
    h2,
    p {
      color: var(--light-green);
    }
  }
`;
export const Terms = styled.div`
  padding: 0.8rem;
  input + label {
    display: inline-block;
    margin-left: 0.5rem;
    font-size: 1.2rem;
  }
`;
