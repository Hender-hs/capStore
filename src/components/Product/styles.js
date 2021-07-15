import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  border-radius: 10px;

  img {
    margin-top: 40px;
    width: 220px;
    border: none;
    padding-top: 1rem;
  }

  h3 {
    color: black;
    font-size: 20px;
    font-weight: 600;
    margin-top: 20px;
  }
  @media only screen and (min-width: 768px) {
    background-color: transparent;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    img {
      margin-top: 0px;
      max-width: 300px;
      width: 100%;
    }
    h3 {
      color: black;
      border-bottom: 1px solid white;
      font-size: 30px;
    }
  }
`;
export const Datas = styled.div`
  @media only screen and (min-width: 768px) {
    color: black;
    margin-left: 20px;
    p,
    h6 {
      padding: 0.5rem;
    }
    p {
      font-weight: bold;
      font-size: 22px;
    }
    h6 {
      border-bottom: 1px solid white;
      font-size: 25px;
    }
  }
`;

export const SellerPrice = styled.div`
  label {
    color: green;
  }

  p {
    color: #404040;
  }
`;

export const ClientPrice = styled.div`
  label {
    color: green;
    padding-right: 0.3rem;
  }

  h6 {
    font-size: 14px;
    margin: 1rem 0;
  }
  
`;
