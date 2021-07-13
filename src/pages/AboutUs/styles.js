import styled from 'styled-components';


const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 0.5rem;
  background-image: radial-gradient(var(--black), var(--gray))
`;

export const Background = styled.div`
  width: 90%;
  margin: 0 auto;
  background: var(--black);
  border-radius: 20px;
`;

export const BackgroundH2 = styled.div`
  width: 90%;
  margin: 0 auto;
  background: var(--light-green);
  border-radius: 10px;
  margin-top: 10px;
  text-align: center;
  padding: 1rem;
  color: white;
`;

export default Container