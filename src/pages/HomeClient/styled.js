import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: black;
  height: 100vh;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  width: 200px;
  height: 300px;
  margin: 10rem auto;
  img {
    width: 100px;
    height: 100px;
  }
`;
