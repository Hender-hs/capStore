import * as S from "./styles";
// import DefaultImage from "../assets/default.jpg";
import { useCart } from "../../providers/Cart";
import CartProduct from "./CartProduct";
import formatValue from "../../utils/formatValue";
import Button from "../../components/Button";
import { toast } from "react-toastify";
import { useState } from "react";

const UserCart = () => {
  const { cart, setCart, getCartCost } = useCart();

  const handleBuy = () => {
    setCart([]);
    toast.success("Compra realizada!");
  };

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
            quantity={product?.quantity}
          />
        ))}
      </S.Container>
      <S.Container>
        <S.Content>
          <S.CostCol>Subtotal</S.CostCol>
          <S.CostCol>
            {formatValue(
              cart.reduce(
                (acc, product) => acc + product.price * product.quantity,
                0
              )
            )}
          </S.CostCol>
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
        <Button
          width="200px"
          onClick={handleBuy}
          style={{ cursor: "pointer", borderRadius: "10px" }}
        >
          Comprar
        </Button>
      </S.ButtonContainer>
    </S.CartContainer>
  );
};

export default UserCart;
