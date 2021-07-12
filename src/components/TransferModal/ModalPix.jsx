import { useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import * as S from "./styles";

const BiggerInput = styled(S.Input)`
  width: 300px;
  margin: 1rem;
`;

export const ModalPix = () => {
  const [pixValue, setPixValue] = useState("");

  const handleSendData = () => {
    console.log(pixValue);
  };

  return (
    <S.ModalContent style={{ padding: "3rem 1rem" }}>
      <S.ModalHeader>
        <label>Email</label>
        <S.Divisor />
        <label>Chave aleatória</label>
        <S.Divisor />
        <label>CPF</label>
      </S.ModalHeader>
      <BiggerInput
        value={pixValue}
        onChange={(e) => setPixValue(e.target.value)}
      />
      <Button onClick={handleSendData}>Finalizar</Button>
    </S.ModalContent>
  );
};
