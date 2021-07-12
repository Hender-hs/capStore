import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--lighter-green);
  padding: 1rem;
  > :first-child {
    display: flex;
    gap: 1rem;
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    background-color: #fff;
    border-radius: 15px;
    p {
      font-size: 18px;
    }
    > :first-child {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 80%;
    }
  }
`;

export const Likes = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
