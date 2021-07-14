import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: linear-gradient(0deg, rgb(175, 175, 175) 0%, rgb(0, 0, 0, 0.5) 0%, rgb(0, 0, 0) 110%);
  overflow-x: hidden;
`

export const BodyDiv = styled.div `
  width: 100%;
  height: 70%;
  margin-top: 75px;
  display: flex;
  justify-content: space-evenly;
`

export const PChardware = styled.div `
  width: 60%;
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`
export const EachHardwareSelected = styled.div `
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 15px;
  cursor: pointer;
  background-color: #c4c4c4;
  border-radius: 10px;
  padding: 20px;

  img {
    height: 200px;
    max-width: 300px;
  }

  .product-info {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 20px 0 25px 0;
    font-weight: 800;
  }

  .product-name {
    margin-top: 25px;
    width: 50%;
  }
`

export const EachHardware = styled.div `
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 15px;
  cursor: pointer;
  background-color: #c4c4c4;
  border-radius: 10px;
  padding: 20px;
  font-weight: 800;
  text-align: center;

  img {
    height: 200px;
    max-width: 300px;
  }

  strong {
    color: var(--green);
  }

  h3 {
    font: bolder;
  }

  .first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
  }

  .second-child {
    margin: 10px 0;
  }

  .product-name {
    margin-top: 25px;
    width: 50%;
  }
`

export const Modal = styled.div `
  position: absolute;
  /* width: ${() => `${document.body.clientWidth}px` }; */
  width: 100%;
  height: ${() => `${document.body.clientHeight}px` };
  visibility: ${({open}) => open ? "visible" : "hidden" };

  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;

  background-color: ${({open}) => open ? "rgb(0, 0, 0, 0.5)" : "rgb(255, 255, 255, 0)" };

  transition: 0.25s;
`

export const ModalContainer = styled.div `
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  visibility: ${({open}) => open ? "visible" : "hidden" };
`

export const EachHardwareType = styled.div `
  width: 250px;
  height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  margin: 15px;
  cursor: pointer;
  color: white;
  background-color: #388F40;

  img {
    width: 200px;
  }
`

export const SelectedProducts = styled.div `
  width: 40%;
  min-height: 100%;
  background-color: var(--gray);
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    color: var(--green);
  }

  h3 {
    font: bolder;
  }

  .price-info {
    margin: 10px 0;
  }

`
export const TitleDiv = styled.div `
  width: 100%;
  height: 120px;
  background-color: var(--green);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -15px;
`