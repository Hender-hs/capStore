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

export const Modal = styled.div `
  position: absolute;
  width: ${() => `${document.body.clientWidth}px` };
  height: ${() => `${document.body.clientHeight}px` };
  visibility: ${({open}) => open ? "visible" : "hidden" };

  background-color: ${({open}) => open ? "rgb(0, 0, 0, 0.5)" : "rgb(255, 255, 255, 0)" };

  transition: 0.5s;
`

export const ModalContainer = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  visibility: ${({open}) => open ? "visible" : "hidden" };
`