import Header from "../../components/Header";
import * as S from "./styles";
import { IoWalletOutline as WalletIcon } from "react-icons/io5";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import formatValue from "../../utils/formatValue";
import Input from "../../components/Input";

const Wallet = () => {
  const history = useHistory();

  const [userData, setUserData] = useState();

  const token = localStorage.getItem("@capstore:token");

  if (!token) history.push("/");

  const getUser = async () => {
    const tokenDecoded = jwtDecode(token).sub;

    const responseRequest = await api.get(`/users/${tokenDecoded}`);

    setUserData(responseRequest.data);
  };

  useEffect(() => {
    !userData && getUser();
  });

  return (
    <S.Container>
      <Header />
      <S.Body>
        <S.WalletDiv>
          <WalletIcon size="200" />
          <S.H3>{formatValue(userData?.cash || 0)}</S.H3>
          <S.DivButton>
            <Button
              onClick={() => history.push("/withdrawMoney")}
              color="black"
              width="95%"
              height="70%"
              style={{ fontSize: "17px", color: "white", cursor: "pointer" }}
            >
              Retirar Dinheiro
            </Button>
          </S.DivButton>
        </S.WalletDiv>
      </S.Body>
    </S.Container>
  );
};

export default Wallet;
