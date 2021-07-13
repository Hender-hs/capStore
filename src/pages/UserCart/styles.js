import styled from "styled-components";

export const ProductsContainer = styled.div``;

export const ProductContent = styled.div`
  display: flex;
  border-bottom: 1px solid var(--gray);
  padding: 10px;

  img {
    width: 102px;
    height: 41px;
  }
`;

export const ProductCol = styled.div`
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;

  label {
    border: 1px solid var(--black);
    width: 15px;
    height: 18px;
    font-family: Roboto sans-serif;
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
