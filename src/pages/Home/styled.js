import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 27%, rgb(0, 0, 0) 100%);
  background-color: black;
  min-height: 100vh;
  transition: 0.2s;
  input {
    background: none;
    border-radius: 15px;
    border: 1px solid black;
    width: 80vw;
    height: 2rem;
    color: black;
    margin: 2rem auto;
    padding: 10px 20px;
  }
  h1 {
    color: var(--black);
  }
  polygon {
    fill: var(--gray);
  }

  img {
    /* height: ${() => document.scrollingElement.clientWidth}; */
    height: 50vh;
    width: 30vw;
  }

  .search {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 800px) {

    img {
    height: 50vh;
    width: 85vw;
    }

    .search {
      width: 80%;
      /* background-color: red; */
    }
  }

`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid white;
  width: 90%;
  height: 90%;
  background: radial-gradient(circle, rgb(255, 255, 255, 0.5) 0%, rgb(255, 255, 255) 27%, rgb(0, 0, 0, 0.7) 100%);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  img {
    width: 250px;
    height: auto;
  }
`;

export const CardS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  width: 12.5rem;
  height: 10.75rem;
  margin-top: 8rem;
  margin-left: 25%;
  background: white;
  border: 1px solid var(--gray);
  border-radius: 5px;
  img {
    width: 6.2rem;
    height: 6.2rem;
  }
`;


export const SliderChild = styled.div `
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
`