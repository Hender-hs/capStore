import styled from "styled-components";

export const Container = styled.div`
  background-color: transparent;
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  align-items: center;
  z-index: 2;
  font-weight: bold;
  border-bottom: 1px solid var(--black);

  @media (max-width: 768px) {
    display: none;
  }

  nav {
    ul {
      display: flex;
      li {
        padding: 0.5rem 1rem;
        border-right: 2px solid black;
        font-size: 1.2rem;
        letter-spacing: 1px;
        color: red;

        a {
          color: ${(props) => (props.color ? props.color : "white")};

          &:hover {
            color: var(--green);
          }
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
    margin-right: 50px;
    input {
      border-radius: 15px;
      border: 1px solid black;
      padding: 10px 20px;
      width: 200px;
      margin: 0;
    }
    button {
      border-radius: 10px;
      background-color: white;
    }
  }
`;
