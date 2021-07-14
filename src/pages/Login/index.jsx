import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../providers/Auth";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container } from "./styles";

function Login() {
  const { signIn } = useAuth();

  const [error, setError] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().email().required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .required("Campo obrigatório"),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    signIn(data, setError, history);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            label="Email"
            type="text"
            register={register}
            name="email"
            error={errors.email?.message}
          />
        </div>
        <div>
          <Input
            label="Senha"
            type="password"
            register={register}
            name="password"
            error={errors.password?.message}
          />
        </div>
        <Button type="submit">Enviar</Button>
      </form>
      {error && <span> Usuário ou senha incorretas! </span>}
    </Container>
  );
}

export default Login;
