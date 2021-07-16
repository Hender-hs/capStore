import Header from "../../components/Header";
import MenuDesktop from "../../components/MenuDesktop";
import UserCart from "../../components/UserCart";

import * as S from "./styles";

const Cart = () => {
  return (
    <S.Container>
      <Header color="black" />
      <MenuDesktop />
      <UserCart />
    </S.Container>
  );
};

export default Cart;
