import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  width: 100%;
  
`;


export const Tabs = styled.div`
  background: rgba( 255, 251, 251, 0.25 );
  box-shadow: 0 0px 32px 0 #16db65;
  backdrop-filter: blur( 14.5px );
  -webkit-backdrop-filter: blur( 14.5px );
  border-radius: 10px 10px 0 0;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  display: flex;
  color: white;
  border: 1px solid var(--gray);
  width: 100%;
  margin: 0;

  div {
    width: 50%;
    text-align: center;
    padding: 10px;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
      background-color: var(--green);
      border-radius: 10px 10px 0 0;
    }
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Divider = styled.section`
  height: 40px;
  width: 1px;
  background-color: white;
`;

export const Content = styled.div`
  background: rgba( 255, 251, 251, 0.25 );
  box-shadow: 0 8px 32px 0 #16db65;
  backdrop-filter: blur( 14.5px );
  -webkit-backdrop-filter: blur( 14.5px );
  border-radius: 0 0 10px 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  width: 100%;
  margin: 0 auto;
  position: relative;
  @media (min-width: 800px) {
    padding: 1rem;
  }
`;

export const Data = styled.div`
  display: flex;

  ul {
    width: 50%;
    padding: 20px 0;

    &.editInfo {
      li {
        display: flex;
        justify-content: space-between;
        max-width: 150px;
        align-items: center;

        input {
          width: 90px;
          padding: 5px;
          border: none;
          outline: none;
          border-radius: 5px;
        }
        

        @media (min-width: 768px) {
          max-width: 300px;

          input {
            width: 200px;
          }
        }
      }
    }
  }

  li {
    padding: 10px 7px;
    color: white;
    animation: vanish 0.5s;

    @keyframes vanish {
      from {
        opacity: 0;
      }
    }

    &:hover {
      color: var(--green);
    }
  }

  @media (min-width: 768px) {
    li {
      padding: 10px 30px;
      font-size: 1.2rem;
    }
  }
`;

export const ChangeData = styled.button`
  color: #fff;
  position: absolute;
  bottom: 20px;
  right: 40px;
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 0.5rem;
  font-family: var(--alt-font);
  background-color: transparent;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;
