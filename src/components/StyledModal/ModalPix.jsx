import styled from "styled-components";
import Button from "../Button";
import * as S from "./styles";

const BiggerInput = styled(S.Input)`
  width: 300px;
  margin: 1rem;
`;

export const ModalPix = () => {
  return (
    <S.ModalContent style={{ padding: "3rem 1rem" }}>
      <S.ModalHeader>
        <label>Email</label>
        <S.Divisor />
        <label>Chave aleatória</label>
        <S.Divisor />
        <label>CPF</label>
      </S.ModalHeader>
      <BiggerInput />
      <Button>Finalizar</Button>
    </S.ModalContent>
  );
};
