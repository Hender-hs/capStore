import Header from "../../components/Header";
import * as S from "./styles";
import { IoWalletOutline as WalletIcon } from "react-icons/io5";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import formatValue from "../../utils/formatValue";
import { useAuth } from "../../providers/Auth";
import Lottie from "react-lottie";

import animationWallet from "../../assets/lotties/wallet.json";

const Wallet = () => {
  const { token, user, getUserInfo } = useAuth();

  const history = useHistory();

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line
  }, []);

  if (!token) history.push("/");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationWallet,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <S.Container>
      <Header />
      <S.Body>
        <S.WalletDiv>
          <div style={{ marginRight: "-150px" }}>
            <Lottie options={defaultOptions} width={400} height={400} />
          </div>
          <S.H3>{formatValue(user?.cash || 0)}</S.H3>
          {!!user.cash && (
            <Button
              onClick={() => history.push("/withdrawMoney")}
              color="black"
              width="250px"
              height="50px"
            >
              Retirar Dinheiro
            </Button>
          )}
        </S.WalletDiv>
      </S.Body>
    </S.Container>
  );
};

export default Wallet;
