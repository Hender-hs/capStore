import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  button {
    border-radius: 10px;
  }
`;

export const Body = styled.div`
  margin-top: 75px;
  width: 100%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WalletDiv = styled.div`
  width: 50%;
  height: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .animationMobile {
    margin-right: -80px;
    @media (min-width: 768px) {
      display: none;
    }
  }

  .animationDesktop {
    margin-right: -230px;
    @media (max-width: 767px) {
      display: none;
    }
  }
`;

export const H3 = styled.h3`
  font-size: 45px;
  color: white;
`;
