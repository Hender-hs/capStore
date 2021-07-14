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

  @media (min-width: 768px) {
    padding: 20px;
  }

  button {
    background-color: black;
    border-radius: 10px;
    color: white;
    padding: 2rem 3rem;
    outline: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    letter-spacing: 1px;
    transition: 0.3s;
    margin: 1rem 0;
    width: fit-content;
    display: flex;
    align-items: center;

    &:hover {
      background-color: var(--green);
      color: #ffffff;
    }

    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 768px) {
    label {
      font-size: 1.5rem;
    }
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  padding: 10px;

  label {
    font-size: 18px;
  }

  @media (min-width: 768px) {
    label {
      font-size: 1.5rem;
    }

    padding: 20px;
  }
`;

export const Divisor = styled.div`
  border-left: 1px solid white;
  height: 20px;
  padding-left: 10px;
  margin-left: 10px;

  @media (min-width: 768px) {
    height: 30px;
    padding-left: 60px;
    margin-left: 60px;
  }
`;

export const InputContainer = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    min-width: 700px;
  }
`;

export const Input = styled.input`
  border-radius: 10px;
  padding: 1rem;
  outline: none;
  border: none;
  background-color: white;
  font-size: 14px;
  font-family: var(--alt-font);
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    width: 100%;
  }
`;

export const TextError = styled.p`
  color: #c93838;
  padding: 5px;
`;

export const InputLabel = styled.p`
  padding: 0.5rem 0;
  color: white;
  font-size: 18px;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Select = styled.select`
  width: 304px;
  font-size: 16px;
  padding: 1rem;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  border: none;
  background: white;

  @media (min-width: 768px) {
    width: 100%;
    font-size: 1.4rem;
  }
`;

export const InputContent = styled.div`
  @media (min-width: 768px) {
    width: 50%;
    padding: 10px;
  }
`;
export const ModalHeaderEvaluation = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  label {
    font-size: 18px;
  }
  padding: 20px;
  @media (min-width: 768px) {
    label {
      font-size: 1.5rem;
    }
  }
`;