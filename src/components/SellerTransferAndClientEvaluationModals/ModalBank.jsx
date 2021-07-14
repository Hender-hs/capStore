import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../Button";

import * as S from "./styles";

export const ModalBank = () => {
  const schema = yup.object().shape({
    agency: yup.string().required("Campo obrigatório"),
    accountNumber: yup.string().required("Campo obrigatório"),
    name: yup.string().required("Campo obrigatório"),
    bank: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.ModalContent>
        <S.InputContainer>
          <S.InputContent>
            <S.InputLabel>Agência</S.InputLabel>
            <S.Input
              name="agency"
              {...register("agency")}
              type="text"
              htmlFor="agency"
            />
            {!!errors.agency && (
              <S.TextError>{errors?.agency.message}</S.TextError>
            )}
          </S.InputContent>
          <S.InputContent>
            <S.InputLabel>Número da Conta</S.InputLabel>
            <S.Input
              name="accountNumber"
              {...register("accountNumber")}
              htmlFor="accountNumber"
            />
            {!!errors.accountNumber && (
              <S.TextError>{errors?.accountNumber.message}</S.TextError>
            )}
          </S.InputContent>
          <S.InputContent>
            <S.InputLabel>Nome do titular</S.InputLabel>
            <S.Input name="name" {...register("name")} htmlFor="name" />
            {!!errors.name && <S.TextError>{errors?.name.message}</S.TextError>}
          </S.InputContent>
          <S.InputContent>
            <S.InputLabel>Banco</S.InputLabel>
            <S.Select name="bank" {...register("bank")}>
              <option value="Banco do Brasil">Banco do Brasil</option>
              <option value="Santander">Santander</option>
              <option value="Bradesco">Bradesco</option>
            </S.Select>
          </S.InputContent>
        </S.InputContainer>
        <Button type="submit" color="black">
          Finalizar
        </Button>
      </S.ModalContent>
    </form>
  );
};
