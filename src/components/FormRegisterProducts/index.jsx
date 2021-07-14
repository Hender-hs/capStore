import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useHistory } from "react-router";
import { toastError, toastSuccess } from "../../utils/toast";

import Button from "../Button";

const FormRegisterProducts = ({ id }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Required field"),
    price: yup.string().required("Required field"),
    category: yup.string().required("Required field"),
    url: yup.string().required("Required field"),
    quantity: yup.string().required("Required field"),
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

  const onSubmit = ({ name, price, category, url, quantity, description }) => {
    const produto = {
      name,
      price,
      category,
      url,
      quantity,
      description,
      sellerId: 3,
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
          <input {...register("name")} placeholder="name" name="name" />
          {errors.name && <span>Esse campo é obrigatório</span>}

          <input {...register("price")} placeholder="Preço" name="price" />
          {errors.price && <span>Esse campo é obrigatório</span>}

          <input
            {...register("category")}
            placeholder="Categoria"
            name="category"
          />
          {errors.category && <span>Esse campo é obrigatório</span>}

          <input {...register("url")} placeholder="url" name="url" />
          {errors.url && <span>Esse campo é obrigatório</span>}

          <input
            {...register("quantity")}
            placeholder="quantity"
            name="quantity"
          />
          {errors.quantity && <span>Esse campo é obrigatório</span>}

          <input
            {...register("description")}
            placeholder="description"
            name="description"
          />
          {errors.description && <span>Esse campo é obrigatório</span>}
          <Button width="4rem" type="submit">
            Send
          </Button>
        </form>
      </>
    </>
  );
};
export default FormRegisterProducts;
