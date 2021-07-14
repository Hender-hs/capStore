import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from "react";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../providers/Auth";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { ContainerForm, Container, Wrapper, RegisterButton, InputDiv, Title } from "./styles";
import Lottie from 'react-lottie';
import buying from '../../assets/lotties/buying.json'


function Login() {
  const { signIn } = useAuth();

  const [error, setError] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  const buyerOptions = {
    loop: true,
    autoplay: true,
    animationData: buying,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const schema = yup.object().shape({
    email: yup.string().email("O email deve ser válido").required("Campo obrigatório"),
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

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
     window.addEventListener("resize", handleResizeWindow);
     return () => {
       window.removeEventListener("resize", handleResizeWindow);
     };
   }, []);

  const registerFunc = () => {
    return history.push("/register")
  }

  if (width < breakpoint) {
    return (
      <Wrapper>
      <Container>
        <Lottie 
          options={buyerOptions}
          width={300}
          height={250}
        />
      </Container>
      <ContainerForm>
        <form 
          onSubmit={handleSubmit(onSubmit)}
          style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
            <Title>Entrar</Title>
          <InputDiv>
            <Input
              label="Email"
              type="text"
              register={register}
              name="email"
              error={errors.email?.message}
              placeholder="joao@mail.com"
              style={{marginBottom: 5}}
            />
          </InputDiv>
          <InputDiv>
            <Input
              label="Senha"
              type="password"
              register={register}
              name="password"
              error={errors.password?.message}
              placeholder="Senha"
              style={{marginBottom: 5}}
            />
          </InputDiv>
          <Button 
            style={{marginTop: 25, marginBottom: 25, borderRadius: 10}}
            type="submit"
            width="60%">Enviar</Button>
        <p style={{color: "white"}}>Não possuo conta ainda. <RegisterButton onClick={registerFunc}>Registrar</RegisterButton></p>
        </form>
        {error && <span> Usuário ou senha incorretas! </span>}
      </ContainerForm>
      </Wrapper>
    );
  } else if (width > breakpoint){
    return (
      <>
      </>
    )
  }
}

export default Login;
