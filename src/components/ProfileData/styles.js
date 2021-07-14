import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

export const Tabs = styled.div`
  background-color: var(--black);
  display: flex;
  color: white;
  border: 1px solid var(--gray);

  div {
    width: 50%;
    text-align: center;
    padding: 10px;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
      background-color: var(--green);
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
  background-color: var(--gray);
  padding: 20px;
  width: 100%;
  position: relative;
`;

export const Data = styled.div`
  display: flex;

  ul {
    width: 50%;
    padding: 20px 0;
  }

  li {
    padding: 10px 7px;
    color: white;

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

export const ChangeData = styled.div`
  color: red;
  position: absolute;
  bottom: 20px;
  right: 40px;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;
