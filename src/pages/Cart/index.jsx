import Header from "../../components/Header";
import UserCart from "../../components/UserCart";

import * as S from "./styles";

const Cart = () => {
  return (
    <S.Container>
      <Header color="black" />
      <UserCart />
    </S.Container>
  );
};

export default Cart;
