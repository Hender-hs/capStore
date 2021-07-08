import Button from "../Button";
import * as S from "./styles";

export const ModalPix = () => {
  return (
    <S.ModalContent>
      <S.ModalHeader>
        <label>Email</label>
        <S.Divisor />
        <label>Chave aleatória</label>
        <S.Divisor />
        <label>CPF</label>
      </S.ModalHeader>
      <Button>Finalizar</Button>
    </S.ModalContent>
  );
};
