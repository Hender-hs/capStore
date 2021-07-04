import { TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../providers/Auth";
import { History } from "history";

import { Container } from "./styles";

interface SubmitProps {
  username: string;
  password: string;
}

function Login() {
  const { signIn } = useAuth();

  const [error, setError] = useState(false);

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Campo obrigatório"),
  });

  const history: History = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitProps>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: SubmitProps) => {
    signIn(data, setError, history);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            margin="normal"
            variant="outlined"
            label="Nome de usuário"
            name="username"
            size="small"
            color="primary"
            inputRef={register}
            error={!!errors.username}
            helperText={errors.username?.message}
          ></TextField>
        </div>

        <div>
          <TextField
            margin="normal"
            variant="outlined"
            type="password"
            label="Senha"
            name="password"
            size="small"
            color="primary"
            inputRef={register}
            error={!!errors.password}
            helperText={errors.password?.message}
          ></TextField>
        </div>
        <Button type="submit" variant="contained" color="primary" size="large">
          Enviar
        </Button>
      </form>
      {error && <span> Usuário ou senha incorretas! </span>}
    </Container>
  );
}

export default Login;
