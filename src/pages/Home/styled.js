import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #000000;
  height: 100vh;
  input {
    background: none;
    border-radius: 5px;
    border: 1px solid white;
    height: 2rem;
    color: white;
    text-align: center;
  }
  h3 {
    color: #65d154;
    margin: 0;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  width: 12.5rem;
  height: 18.75rem;
  margin: 5rem auto;
  background: white;
  img {
    width: 6.2rem;
    height: 6.2rem;
  }

  span {
    font-weight: bold;
    margin: 5px 0;
  }
  p {
    color: #65d154;
    font-weight: bold;
    margin: 5px 0;
  }
`;

export const ContainerCategory = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin-top: 2rem;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 3.5rem;
  width: 4.2rem;
  margin: 0.8rem;
  border-bottom: 2px solid gray;
  span {
    font-weight: bold;
    color: rgb(14, 241, 52);
  }
  span:hover {
    animation: neon 1s alternate infinite ease-in-out;
  }

  @keyframes neon {
    from {
      filter: drop-shadow(0px 3px 3px rgb(14, 241, 52));
    }
    to {
      filter: drop-shadow(0px 3px 3px rgb(14, 241, 52));
    }
  }
`;
