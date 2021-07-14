import { TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../providers/Auth";
import { History } from "history";

import { Container } from "./styles";

function Signup() {
  const { signUp } = useAuth();

  const [error, setError] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().email().required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
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

  const onSubmit = (data: SubmitProps) => {
    console.log("a");
    const userInfo = {
      cash: 1000,
      url: "",
      level: 1,
      products: [],
      computers: [],
      age: "",
      ...data,
    };
    signUp(userInfo, setError, history);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            margin="normal"
            variant="outlined"
            label="Nome de usuário"
            size="small"
            color="primary"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          ></TextField>
        </div>

        <div>
          <TextField
            margin="normal"
            variant="outlined"
            type="password"
            label="Senha"
            size="small"
            color="primary"
            {...register("password")}
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

export default Signup;
