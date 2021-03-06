import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  border-bottom: 1px solid var(--black);
  color: white;

  > :first-child {
    display: flex;
    gap: 1rem;
    font-weight: bold;
  }
  p {
    padding: 0.5rem;
    color: white;
  }

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    background-color: #fff;
    border-radius: 15px;
    color: black;
    p {
      font-size: 18px;
      border: 0;
      color: black;
    }
    > :first-child {
      align-items: center;
      justify-content: space-between;
      width: 80%;
    }
    border: 0;
  }
`;

export const Likes = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
