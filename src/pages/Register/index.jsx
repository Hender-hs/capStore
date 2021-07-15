import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect, useHistory } from "react-router-dom";
import api from "../../services/api";
import Container, {
  Select,
  Wrapper,
  Divisor,
  LoginButton,
  AnimatedDiv,
} from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { toastSuccess, toastError } from "../../utils/toast";
import Lottie from "react-lottie";
import registerAnimation from "../../assets/lotties/register.json";

const Register = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 800;

  const registerOptions = {
    loop: true,
    autoplay: true,
    animationData: registerAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    phone: yup
      .string()
      .matches(
        /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/,
        "Apenas números entre 0 e 9 são válidos"
      )
      .required("Campo obrigatório")
      .min(8),
    cep: yup
      .string()
      .matches(
        /^\d{5}-\d{3}$/,
        "Insira seu CEP com o formato válido, ex.: 00000-111"
      )
      .required("Campo Obrigatório"),
    password: yup
      .string()
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Sua senha deve conter ao menos 8 caracteres, uma letra maíuscula, uma letra minúscula, um número e um caracter especial."
      )
      .required("Campo obrigatório")
      .min(8),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem coincidir")
      .required("Campo obrigatório"),
    type: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const history = useHistory();

  const handleSubmitFunction = (data) => {
    console.log(data);
    api
      .post("/users/", data)
      .then((response) => {
        localStorage.setItem(
          "@capstore:accessToken",
          response.data.accessToken
        );
        toastSuccess("Usuário criado com sucesso");
        return history.push("/");
      })
      .catch((_) => toastError("Erro ao criar usuário já cadastrado"));
    console.log("done");
  };

  const loginFunc = () => {
    history.push("/");
  };

  const token = localStorage.getItem("@capstore:accessToken") || false;
  if (token) {
    return <Redirect to="/home" />;
  }

  if (width < breakpoint) {
    return (
      <Wrapper>
        <Container>
          <form onSubmit={handleSubmit(handleSubmitFunction)}>
            <h1>Criar Conta</h1>
            <Input
              label="Nome"
              type="text"
              register={register}
              name="name"
              error={errors.name?.message}
              placeholder="João"
            />
            <Input
              label="Email"
              type="text"
              register={register}
              name="email"
              error={errors.email?.message}
              placeholder="joao@mail.com"
            />
            <Input
              label="Telefone"
              type="text"
              register={register}
              name="phone"
              error={errors.phone?.message}
              placeholder="51 9999-9999"
            />
            <Input
              label="CEP"
              type="text"
              register={register}
              name="cep"
              error={errors.cep?.message}
              placeholder="00000-000"
            />
            <Input
              label="Senha"
              type="password"
              register={register}
              name="password"
              error={errors.password?.message}
              placeholder="123456@Aa"
            />
            <Input
              label="Confirme sua Senha"
              type="password"
              register={register}
              name="confirmPassword"
              error={errors.confirmPassword?.message}
              placeholder="123456@Aa"
            />
            <Select {...register("type")}>
              <option value="seller">Cliente</option>
              <option value="client">Vendedor</option>
            </Select>
            <Button type="submit">Confirmar</Button>
          </form>
        </Container>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Container>
          <h1>Criar Conta</h1>
          <form
            onSubmit={handleSubmit(handleSubmitFunction)}
            style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}
          >
            <Divisor>
              <Input
                label="Nome"
                type="text"
                register={register}
                name="name"
                error={errors.name?.message}
                placeholder="João"
              />
              <Input
                label="Email"
                type="text"
                register={register}
                name="email"
                error={errors.email?.message}
                placeholder="joao@mail.com"
              />
              <Input
                label="Telefone"
                type="text"
                register={register}
                name="phone"
                error={errors.phone?.message}
                placeholder="51 9999-9999"
              />
              <Input
                label="CEP"
                type="text"
                register={register}
                name="cep"
                error={errors.cep?.message}
                placeholder="00000-000"
              />
            </Divisor>
            <Divisor>
              <Input
                label="Senha"
                type="password"
                register={register}
                name="password"
                error={errors.password?.message}
                placeholder="123456@Aa"
              />
              <Input
                label="Confirme sua Senha"
                type="password"
                register={register}
                name="confirmPassword"
                error={errors.confirmPassword?.message}
                placeholder="123456@Aa"
              />
              <label>Tipo de usuário</label>
              <Select {...register("type")}>
                <option value="seller">Vendedor</option>
                <option value="client">Cliente</option>
              </Select>
              <span>space</span>
              <Button type="submit">Confirmar</Button>
              <h4>
                Já possuo conta.{" "}
                <LoginButton onClick={loginFunc}>Entrar</LoginButton>
              </h4>
            </Divisor>
          </form>
        </Container>
        <AnimatedDiv>
          <Lottie options={registerOptions} width="25vw" height={600} />
        </AnimatedDiv>
      </Wrapper>
    );
  }
};

export default Register;
