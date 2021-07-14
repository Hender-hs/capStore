import * as S from "./styles";

const UserAndSellerData = ({ propProfileData }) => {
  const {
    cep = 6354240,
    phone = "(21)9999-9999",
    email = "paulo@mail.com",
    location = "Rio de Janeiro",
  } = propProfileData;

  return (
    <S.Data>
      <ul>
        <li>CEP: {cep}</li>
        <li>Celular: {phone}</li>
        <li>Email: {email}</li>
        <li>Senha: ********</li>
      </ul>
      <ul>
        <li>Estado: {location}</li>
      </ul>
      <S.ChangeData>Alterar dados</S.ChangeData>
    </S.Data>
  );
};

export default UserAndSellerData;
