import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--black);
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    180deg,
    rgb(255, 255, 255) 0%,
    rgb(255, 255, 255) 28%,
    rgb(0, 0, 0, 0.5) 85%,
    rgb(0, 0, 0) 100%
  );
  justify-content: space-evenly;
  align-items: center;
  padding-top: 105px;

  .description {
    color: white;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: -450px;
  }

  .description-title {
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    .description {
      display: none;
    }
  }
`;

export const DivProduct = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
  }
`;

export const Button = styled.button`
  border: none;
  height: 50px;
  width: 300px;
  position: relative;
  right: 25%;
  top: 25%;
  background-color: var(--light-green);
  color: white;
  font-size: 15px;
  border-radius: 10px;
  transition: 0.5s;

  &:hover {
    background-color: var(--dark-green);
  }

  @media (max-width: 768px) {
    position: unset;
    height: 40px;
    width: 150px;
  }
`;
