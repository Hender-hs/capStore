import * as S from "./styles";
// import DefaultImage from "../assets/default.jpg";
import { useCart } from "../../providers/Cart";
import CartProduct from "./CartProduct";
import formatValue from "../../utils/formatValue";
import Button from "../../components/Button";
import { toast } from "react-toastify";
import { useState } from "react";

import EmptyImage from "../../assets/carrinho-vazio.jpg";

const UserCart = () => {
  const { cart, setCart, getCartCost } = useCart();
  const [totalCost, setTotalCost] = useState(getCartCost() || 0);

  const handleBuy = () => {
    setCart([]);
    toast.success("Compra realizada!");
    setTotalCost(0);
  };

  const handleAddCost = (price) => {
    setTotalCost(totalCost + price);
  };

  const handleRemoveCost = (price) => {
    setTotalCost(totalCost - price);
  };

  return (
    <S.CartContainer>
      {cart.length > 0 && (
        <>
          <S.Container>
            {cart.map((product, index) => (
              <CartProduct
                key={index}
                name={product.name}
                price={product.price}
                image={product.url}
                id={product.id}
                index={index}
                howMany={product?.howMany}
                handleAddCost={handleAddCost}
                handleRemoveCost={handleRemoveCost}
              />
            ))}
          </S.Container>
          <S.Container>
            <S.Content>
              <S.CostCol>Subtotal</S.CostCol>
              <S.CostCol>{formatValue(totalCost)}</S.CostCol>
            </S.Content>
            <S.Content>
              <S.CostCol>Frete</S.CostCol>
              <S.CostCol>{formatValue(15)}</S.CostCol>
            </S.Content>
            <S.Content>
              <S.CostCol>Total</S.CostCol>
              <S.CostCol>{formatValue(totalCost + 15)}</S.CostCol>
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
        </>
      )}
      {cart.length < 1 && (
        <S.ImageContainer>
          <img src={EmptyImage} alt="empty" />
        </S.ImageContainer>
      )}
    </S.CartContainer>
  );
};

export default UserCart;
