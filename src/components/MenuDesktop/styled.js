import styled from "styled-components";

export const Container = styled.div`
  background-color: transparent;
  position: absolute;
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 1rem;
  align-items: center;
  z-index: 2;
  font-weight: bold;
  nav {
    ul {
      display: flex;
      li {
        padding: 0.5rem;
        border-right: 2px solid white;
        a {
          color: white;
        }
        :last-child {
          border: 0;
        }
      }
    }
  }
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    input {
      border-radius: 15px;
      border: 1px solid black;
      padding: 10px 20px;
    }
    button {
      border-radius: 10px;
      background-color: white;
    }
  }
`;
