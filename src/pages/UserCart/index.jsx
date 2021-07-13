import * as S from "./styles";
// import DefaultImage from "../assets/default.jpg";
import { useCart } from "../../providers/Cart";
import CartProduct from "./CartProduct";
import formatValue from "../../utils/formatValue";
import Button from "../../components/Button";

const UserCart = () => {
  const { cart, getCartCost } = useCart();

  return (
    <S.CartContainer>
      <S.Container>
        {cart.map((product, index) => (
          <CartProduct
            key={index}
            name={product.name}
            price={product.price}
            image={product.url}
            id={product.id}
            index={index}
          />
        ))}
      </S.Container>
      <S.Container>
        <S.Content>
          <S.CostCol>Subtotal</S.CostCol>
          <S.CostCol>{formatValue(getCartCost())}</S.CostCol>
        </S.Content>
        <S.Content>
          <S.CostCol>Frete</S.CostCol>
          <S.CostCol>{formatValue(15)}</S.CostCol>
        </S.Content>
        <S.Content>
          <S.CostCol>Total</S.CostCol>
          <S.CostCol>{formatValue(getCartCost() + 15)}</S.CostCol>
        </S.Content>
      </S.Container>
      <S.ButtonContainer>
        <Button width="200px">Comprar</Button>
      </S.ButtonContainer>
    </S.CartContainer>
  );
};

export default UserCart;
