import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: linear-gradient(
    0deg,
    rgb(175, 175, 175) 0%,
    rgb(0, 0, 0, 0.5) 0%,
    rgb(0, 0, 0) 110%
  );
  overflow-x: hidden;
`;

export const BodyDiv = styled.div`
  width: 100%;
  height: 70%;
  margin-top: 80px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: initial;
  }
`;

export const PChardware = styled.div`
  width: 60%;
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  img {
    max-width: 200px;
    max-height: 150px;
    border-radius: 10px;
    border: 2px solid var(--black);
  }
`;
export const EachHardwareSelected = styled.div`
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

  @media (max-width: 850px) {
    height: 10%;

    .product-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      margin: 0px 0 0px 0;
      font-size: 10px;
    }

    img {
      height: 50px;
    }

    button {
      width: 100%;
      height: 80%;
      font-size: 12px !important;
    }
  }
`;

export const EachHardware = styled.div`
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

  @media (max-width: 850px) {
    height: 10%;
    width: 80vw;

    .product-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      margin: 0px 0 0px 0;
      font-size: 8px;
    }

    img {
      height: 50px;
    }

    button {
      width: 100%;
      height: 80%;
    }
  }
`;

export const Modal = styled.div`
  position: absolute;
  /* width: ${() => `${document.body.clientWidth}px`}; */
  width: 100%;
  height: ${() => `${document.body.clientHeight}px`};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};

  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;

  background-color: ${({ open }) =>
    open ? "rgb(0, 0, 0, 0.5)" : "rgb(255, 255, 255, 0)"};

  transition: 0.25s;
`;

export const ModalContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
`;

export const EachHardwareType = styled.div`
  width: 250px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  margin: 15px;
  padding: 5px 0;
  cursor: pointer;
  color: white;
  background-color: #388f40;
  border: 2px solid var(--green);
  transition: 0.5s;

  img {
    width: 200px;
  }

  p {
    color: white;
    font-size: 1.2rem;
    background: var(--dark-green);
    padding: 5px 10px;
    margin: 10px 0;
    border-radius: 10px;
  }

  &:hover {
    transform: translateY(-10%);
  }
`;

export const SelectedProducts = styled.div`
  width: 40%;
  background-color: var(--gray);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  max-height: 100%;

  strong {
    color: var(--green);
  }

  h3 {
    font: bolder;
  }

  .price-info {
    margin: 10px 0;
  }

  img {
    margin: 10px;
    border: 2px solid var(--green);
    border-radius: 10px;
    max-width: 200px;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin-top: 20px;
  }
`;
export const TitleDiv = styled.div`
  width: 100%;
  height: 120px;
  background-color: var(--green);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -15px;
  /* flex-direction: column; */
  position: relative;

  button {
    border-radius: 10px;
    font-size: 16px;
    background-color: ${(props) =>
      props.disabled === true ? "gray" : `var(--dark-green)`};

    color: white;
    animation: ${(props) => (props.disabled ? "none" : "jump 1s infinite")};

    @keyframes jump {
      from {
        transform: translateY(-10%);
      }
    }
  }

  div {
    position: absolute;
    bottom: -20px;
  }

  @media (max-width: 850px) {
    h1 {
      font-size: 130%;
    }
  }
`;
