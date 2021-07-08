import * as yup from 'yup'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import{Link,Redirect,useHistory} from "react-router-dom"
import api from "../../services/api"

const Register = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    phone: yup.string().matches(/^[0-9]{2}-[0-9]{4}-[0-9]{4}$/, "Apenas números entre 0 e 9 são válidos").required("Campo obrigatório").min(8),
    cep: yup.string().matches(/^\d{5}-\d{3}$/, "Insira seu CEP com o formato válido, ex.: 00000-111").required("Campo Obrigatório"),
    password: yup.string().matches(/^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    "Sua senha deve conter ao menos 8 caracteres, uma letra maíuscula, uma letra minúscula, um número e um caracter especial."
  ).required("Campo obrigatório").min(8),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas devem coincidir')
    .required('Campo obrigatório'),
    typeUser: yup.string().required("Campo obrigatório")
  })

  const {register, handleSubmit, formstate: {errors}} = useForm({
    resolver: yupResolver(formSchema)
  })
  const history = useHistory()

  const handleSubmitFunction = (data) => {
    api.post("/users/", data)
    .then((res) => {
      const {accessToken} = res.data
      localStorage.setItem("@capstore:accessToken", JSON.stringify(accessToken))
      return history.push('/login')
    })
    .catch((err) => toast.error("Erro ao criar usuario"))
  }

  const token = localStorage.getItem("@GestãoDeHábitos:access") || false;
  if(token) {
    return <Redirect to="/dashboard"/>
  }

  return (
    <div></div>
  )
}

export default Register