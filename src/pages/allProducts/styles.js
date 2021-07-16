import styled from "styled-components";

export const Container = styled.div `
  width: 99.4vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: black;
` 

export const Body = styled.div `
  width: 75%;
  min-height: 75%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 65px;
  /* background-color: green; */
`

export const ProductCard = styled.div `
  width: 400px;
  height: 400px;
  background-color: white;
  margin: 25px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  padding: 10px 0;
  border: 1px solid black;

  &:hover {
    transition: 0.4s;
    transform: scale(1.05);
    box-shadow: 1px 10px 10px rgb(0, 0, 0, 0.5);
  }

  img {
    height: 200px;
    max-width: 200px;
    cursor: pointer;
    object-fit: cover;
    object-position: center
  }

  p { 
    cursor: pointer;
  }
`

export const Button = styled.button `
  background-color: var(--light-green);
  width: 200px;
  height: 40px;
  border: none;
  margin-top: 10px;

  &:hover {
    color: white;
    background-color: green;
    transition: 0.3s;
  } 
`

export const Div = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;

  .left-div {
    width: 25%;
    display: flex;
    justify-content: center;
  }
`

export const DivFilter = styled.div `
  width: 50%;
  height: 20%;
  margin-top: 50px;
  background-color: hotpink;
`