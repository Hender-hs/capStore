import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(
    180deg,
    rgb(255, 255, 255) 0%,
    rgb(255, 255, 255) 28%,
    rgb(0, 0, 0, 0.5) 70%,
    rgb(0, 0, 0) 100%
  );
  background-color: black;
  min-height: 100vh;
  transition: 0.2s;
  max-width: 1600px;
  margin: 0 auto;

  input {
    background: none;
    border-radius: 15px;
    border: 1px solid black;
    width: 80vw;
    height: 2rem;
    color: var(--green);
    margin: 2rem auto;
    padding: 10px 30px;
    outline: none;
    font-size: 1.2rem;

    &::placeholder {
      text-align: center;
    }
  }
  h1 {
    color: white;
    background: linear-gradient(var(--green), var(--dark-green));
    padding: 10px;
    margin-top: 20px;
    border-radius: 10px;
  }
  polygon {
    fill: var(--gray);
  }

  img {
    height: 50vh;
    width: 30vw;
    object-fit: cover;
    object-position: center;
  }

  .search {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .seller-title {
    color: white;
    letter-spacing: 2px;
  }

  @media (max-width: 800px) {
    img {
      height: 50vh;
      width: 85vw;
    }

    .search {
      width: 80%;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid white;
  width: 50%;
  padding: 10px 0;
  background: radial-gradient(
    circle,
    rgb(255, 255, 255, 0.5) 0%,
    rgb(255, 255, 255) 27%,
    rgb(0, 0, 0, 0.7) 100%
  );
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  img {
    width: 250px;
    height: auto;
    border: 1px solid var(--green);
    border-radius: 10px;
  }

  span {
    background: var(--dark-green);
    color: white;
    padding: 10px;
    font-size: 1.2rem;
    border-radius: 10px;
  }

  @media (max-width: 800px) {
    width: 85%;
    height: 90%;
    background: transparent;
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

export const SliderChild = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SellerContent = styled.div`
  h2 {
    font-size: 1.2rem;
  }
`;
