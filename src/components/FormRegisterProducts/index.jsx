import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useHistory } from "react-router";
import { toastError, toastSuccess } from "../../utils/toast";

import Button from "../Button";
import { useAuth } from "../../providers/Auth";

const FormRegisterProducts = ({ id }) => {
  const { user } = useAuth();

  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    price: yup.string().required("Campo obrigatório!"),
    category: yup.string().required("Campo obrigatório!"),
    url: yup.string().required("Campo obrigatório!"),
    quantity: yup.string().required("Campo obrigatório!"),
    description: yup.string().required("Campo obrigatório!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const produto = {
      ...data,
      sellerId: user.id,
      feedback: [],
    };
    const token = localStorage.getItem("token");
    api
      .post("/products/", produto, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toastSuccess("Produto cadastrado");
        history.push("/home");
      })
      .catch((_) => toastError("Não foi possivel cadastra este produto"));
    reset();
  };

  return (
    <>
      <h1>Cadastro de produtos</h1>
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} placeholder="Nome" name="name" />
          {errors.name && <span>Esse campo é obrigatório</span>}

          <input {...register("price")} placeholder="Preço" name="price" />
          {errors.price && <span>Esse campo é obrigatório</span>}

          <input
            {...register("category")}
            placeholder="Categoria"
            name="category"
          />
          {errors.category && <span>Esse campo é obrigatório</span>}

          <input {...register("url")} placeholder="Link da Imagem" name="url" />
          {errors.url && <span>Esse campo é obrigatório</span>}

          <input
            {...register("quantity")}
            placeholder="Quantidade"
            name="quantity"
          />
          {errors.quantity && <span>Esse campo é obrigatório</span>}

          <input
            {...register("description")}
            placeholder="Descrição"
            name="description"
          />
          {errors.description && <span>Esse campo é obrigatório</span>}
          <Button
            style={{ borderRadius: "10px", width: "200px" }}
            type="submit"
          >
            Send
          </Button>
        </form>
      </>
    </>
  );
};
export default FormRegisterProducts;
