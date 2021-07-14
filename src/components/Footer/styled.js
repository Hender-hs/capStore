import styled from "styled-components";
export const Container = styled.div`
  background-color: var(--gray);
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  min-height: 100px;
  border-top: 1px solid #fff;
  padding: 1rem;
  color: #fff;
  position: fixed;
  bottom: 0;
  > :first-child {
      p {
          margin: 10px;
      }
      a {
          color: #FFF;
          font-weight: 700;
      }
  }
  > :nth-child(2) {
      svg {
          margin: 10px;
      }
  }
`;
