import { Input } from "@material-ui/core";
import { useState } from "react";
import * as S from "./styles";

const UserAndSellerData = ({ propProfileData }) => {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const { cep, phone, email, location } = propProfileData;

  const handleOpenEdit = () => {
    setIsOpenEdit(!isOpenEdit);
  };

  return (
    <S.Data>
      {!isOpenEdit && (
        <>
          <ul>
            <li>CEP: {cep}</li>
            <li>Celular: {phone}</li>
            <li>Email: {email}</li>
            <li>Senha: ********</li>
          </ul>
          <ul>
            <li>Estado: {location}</li>
          </ul>
          <S.ChangeData onClick={handleOpenEdit}>Alterar dados</S.ChangeData>
        </>
      )}
      {isOpenEdit && (
        <>
          <ul className="editInfo">
            <li>
              CEP: <input placeholder={cep} />
            </li>
            <li>
              Celular: <input placeholder={phone} />
            </li>
            <li>
              Email: <input placeholder={email} />
            </li>
          </ul>
          <ul className="editInfo">
            <li>
              Estado: <input placeholder={location} />
            </li>
          </ul>
          <S.ChangeData onClick={handleOpenEdit}>Salvar</S.ChangeData>
        </>
      )}
    </S.Data>
  );
};

export default UserAndSellerData;
