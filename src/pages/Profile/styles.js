import styled from "styled-components";

export const Container = styled.div `
  width: 100vw;
  height: 100vh;
`

export const Body = styled.div `
  width: 100%;
  height: 90%;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Div = styled.div `
  width: 95%;
  height: 90%;
  background-color: salmon;
  display: flex;
  justify-content: space-between;
`

export const LeftDiv = styled.div `
  width: 30%;
  height: 100%;
  background-color: sandybrown;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

export const RightDiv = styled.div `
  width: 70%;
  height: 100%;
  background-color: royalblue;
`

export const Wallet = styled.div `
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`