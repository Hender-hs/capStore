import styled from "styled-components";

export const Container = styled.div `
  width: 99.4vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: #000000de;
` 

export const Body = styled.div `
  width: 100%;
  min-height: 75%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 65px;

  @media (max-width: 768px) { 
    margin-top: 105px;
  }
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

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;

    img {
      height: 100px;
      max-width: 100px;

    }
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
  justify-content: center;

  .left-div {
    width: 15%;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 768px) { 
    .left-div {
      display: none;
    }
  }
`

export const DivFilter = styled.div `
  position: fixed;
  top: 30vh;
  left: 2vw;
  width: 15%;
  height: 50%;
  margin-top: 50;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  border-radius: 10px;

  input {
    padding: 5px 20px;
    border: 1px solid white;
    border-radius: 10px;
    background-color: transparent;
    color: white;
  }

  h5, label {
    cursor: pointer;
    color: white;
    font-size: medium;

    &:hover {
      color: gray;
    } 
  }
`