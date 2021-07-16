import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 0 20px;

  @media (min-width: 768px) {
    width: 55%;
    margin: 0 auto;
    height: 50%;
    margin: 20px auto;
  }

  @media (min-width: 1800px) {
    width: 35%;
  }
`;
