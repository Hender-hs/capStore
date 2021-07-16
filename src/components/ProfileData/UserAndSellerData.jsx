import { useState } from "react";
import { useAuth } from "../../providers/Auth";
import * as S from "./styles";

const UserAndSellerData = ({ propProfileData }) => {
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const { cep, phone, email, location } = propProfileData;

  const [userCep, setUserCep] = useState(cep || "");
  const [userPhone, setUserPhone] = useState(phone || "");
  const [userEmail, setUserEmail] = useState(email || "");
  const [userLocation, setUserLocation] = useState(location || "");

  const { updateUserInfo, getUserInfo } = useAuth();

  const handleOpenEdit = () => {
    setIsOpenEdit(!isOpenEdit);
  };

  const handleSaveEdit = () => {
    const data = {
      cep: userCep,
      phone: userPhone,
      email: userEmail,
      location: userLocation,
    };

    updateUserInfo(data);
    handleOpenEdit();
    getUserInfo();
    console.log(data);
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
              <span>CEP: </span>
              <input
                placeholder={cep}
                value={userCep}
                onChange={(e) => setUserCep(e.target.value)}
              />
            </li>
            <li>
              <span>Celular : </span>
              <input
                placeholder={phone}
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
              />
            </li>
            <li>
              <span>Email: </span>
              <input
                placeholder={email}
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </li>
          </ul>
          <ul className="editInfo">
            <li>
              <span>Estado: </span>
              <input
                placeholder={location}
                value={userLocation}
                onChange={(e) => setUserLocation(e.target.value)}
              />
            </li>
          </ul>
          <S.ChangeData onClick={handleSaveEdit}>Salvar</S.ChangeData>
        </>
      )}
    </S.Data>
  );
};

export default UserAndSellerData;
