import styled from "styled-components";

export const CartContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding-top: 70px;
`;

export const Container = styled.div`
  background: linear-gradient(var(--black), var(--green));
  border-radius: 5px;
  margin: 20px 0;
  color: white;

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const Content = styled.div`
  display: flex;
  border-bottom: 1px solid white;
  padding: 10px;

  img {
    width: 60px;
    height: 60px;
  }

  justify-content: space-between;
  @media (min-width: 768px) {
    img {
      width: 100px;
      height: 100px;
    }
  }
`;

export const ProductCol = styled.div`
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;

  label {
    /* border: 1px solid var(--gray); */
    width: 15px;
    height: 18px;
    font-family: Roboto sans-serif;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }

  p {
    width: 100%;
  }
`;

export const QuantityButton = styled.button`
  width: 20px;
  height: 20px;
  background: var(--gray);
  outline: none;
  border: 1px solid var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: var(--green);

    &:first-child {
      background: red;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
`;

export const CostCol = styled(ProductCol)`
  width: 50%;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  flex-direction: column;
  color: white;
  font-size: 1rem;
  letter-spacing: 2px;

  @media (min-width: 768px) {
    font-size: 1.4rem;

    svg {
      width: 400px !important;
      height: 400px !important;
    }
  }
`;
