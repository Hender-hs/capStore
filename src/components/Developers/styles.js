import styled from "styled-components";

export const Container = styled.div`
  width: 7rem;
  cursor: pointer;
  margin: 1rem;
  filter: grayscale(1);
  color: #fff;
  text-align: center;
  &:hover {
    transform: scale(1.1);
    filter: grayscale(0);
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px var(--black) solid;
  }
  h3 {
    padding: 0.5rem;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: rgba(28, 27, 27, 0.55);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 20px;
  margin: 2rem 0 2rem 0;
  justify-content: center;

  @media (min-width: 680px) {
    justify-content: space-around;
  }
`;
