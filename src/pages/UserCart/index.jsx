import * as S from "./styles";
// import DefaultImage from "../assets/default.jpg";
import { useCart } from "../../providers/Cart";
import CartProduct from "./CartProduct";
import formatValue from "../../utils/formatValue";
import Button from "../../components/Button";

const UserCart = () => {
  const { cart } = useCart();

  return (
    <S.CartContainer>
      <S.ProductsContainer>
        {cart.map((product, index) => (
          <CartProduct
            key={index}
            name={product.name}
            price={product.price}
            image={product.url}
          />
        ))}
      </S.ProductsContainer>
      <S.ProductsContainer>
        <S.ProductContent>
          <S.CostCol>Subtotal</S.CostCol>
          <S.CostCol>
            {formatValue(cart.reduce((acc, product) => acc + product.price, 0))}
          </S.CostCol>
        </S.ProductContent>
        <S.ProductContent>
          <S.CostCol>Frete</S.CostCol>
          <S.CostCol>{formatValue(15)}</S.CostCol>
        </S.ProductContent>
        <S.ProductContent>
          <S.CostCol>Total</S.CostCol>
          <S.CostCol>
            {formatValue(
              cart.reduce((acc, product) => acc + product.price, 0) + 15
            )}
          </S.CostCol>
        </S.ProductContent>
      </S.ProductsContainer>
      <S.ButtonContainer>
        <Button width="200px">Comprar</Button>
      </S.ButtonContainer>
    </S.CartContainer>
  );
};

export default UserCart;
