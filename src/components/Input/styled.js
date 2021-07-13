import styled from "styled-components";

export const Container = styled.div`
  label {
    color: white;
  }
  input {
    border-radius: 10px;
    border: 1px solid gray;
    padding: 16px;
    margin-top: 10px;
    width: 100%;
    font-size: 1rem;
  }
  p {
    color: #f0610f;
  }
  @media only screen and (min-width: 768px) {
    p {
      color: var(--white);
    }
  }
`;
