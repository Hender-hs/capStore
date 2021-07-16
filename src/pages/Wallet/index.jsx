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
import MenuDesktop from "../../components/MenuDesktop";

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
      <MenuDesktop />
      <S.Body>
        <S.WalletDiv>
          <div className="animationMobile">
            <Lottie options={defaultOptions} width={200} height={200} />
          </div>
          <div className="animationDesktop">
            <Lottie options={defaultOptions} width={600} height={600} />
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
