import styled from "styled-components";

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 200px;

  background: var(--gray);
  color: white;
  border-radius: 5px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  outline: none;

  button {
    background-color: black;
    border-radius: 10px;
    color: white;
    padding: 1rem 2rem;
    outline: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    letter-spacing: 1px;
    transition: 0.3s;

    &:hover {
      background-color: var(--green);
      color: #ffffff;
    }
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  padding: 10px;

  label {
    font-size: 18px;
  }
`;

export const Divisor = styled.div`
  border-left: 1px solid white;
  height: 20px;
  padding-left: 10px;
  margin-left: 10px;
`;

export const InputContainer = styled.div`
  padding: 0 2rem;
`;

export const Input = styled.input`
  border-radius: 10px;
  padding: 1rem;
  outline: none;
  border: none;
  background-color: white;
`;

export const TextError = styled.p`
  color: #c93838;
  padding: 5px;
`;

export const InputLabel = styled.p`
  padding: 0.5rem 0;
  color: white;
  font-size: 16px;
`;
