import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services";
import { useHistory } from "react-router";
import { toastError, toastSuccess } from "../../utils";
import * as S from "./styled";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Input from "../Input";

const RegisterProduct = () => {
  const history = useHistory();
  const schema = yup.object().shape({
    name: yup.string().required("Required field"),
    price: yup.string().required("Required field"),
    url: yup.string().required("Required field"),
    quantily: yup.string().required("Required field"),
    description: yup.string().required("Required field"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = ({ username, email, password }) => {
    const necessaryDatas = { username, email, password };
    api
      .post("/users/", necessaryDatas)
      .then((_) => {
        toastSuccess("Yes!!!You just registered");
        history.push("/login");
      })
      .catch((_) => toastError("That didn't work, try another username"));
    reset();
  };

  return (
    <>
      <S.Container>
        <form onSubmit={handleSubmit(handleForm)}>
          <Input
            register={register}
            type="text"
            name="name"
            label="Nome do produto"
            placeholder="Nome do produto"
            error={errors.name?.message}
          />
          <Input
            register={register}
            type="text"
            name="price"
            label="price"
            placeholder="Preço do Produto"
            error={errors.price?.message}
          />
          <Input
            register={register}
            type="text"
            name="category"
            label="Categoria do produto"
            placeholder="Categoria do produto"
            error={errors.category?.message}
          />
          <Input
            register={register}
            type="text"
            name="url"
            label="url"
            placeholder="url"
            error={errors.url?.message}
          />
          <Input
            register={register}
            type="text"
            name="quantily"
            label="Quantidade"
            placeholder="Quantidade"
            error={errors.quantily?.message}
          />
          <Input
            register={register}
            type="text"
            name="description"
            label="Descrição do produto "
            placeholder="Descrição do produto"
            error={errors.description?.message}
          />
          <Button type="submit">Cadastrar</Button>
        </form>
      </S.Container>
    </>
  );
};

export default RegisterProduct;
