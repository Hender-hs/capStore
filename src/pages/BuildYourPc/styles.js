import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`

export const PChardware = styled.div `
  width: 60%;
  height: min-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`
export const EachHardware = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 15px;
  cursor: pointer;

  img {
    width: 200px;
  }
`