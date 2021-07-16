import * as S from "./styles";
// import DefaultImage from "../assets/default.jpg";
import { useCart } from "../../providers/Cart";
import CartProduct from "./CartProduct";
import formatValue from "../../utils/formatValue";
import Button from "../Button";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useAuth } from "../../providers/Auth";
import Lottie from "react-lottie";

import EmptyAnimation from "../../assets/lotties/empty-cart.json";

const UserCart = () => {
  const { cart, setCart, getCartCost } = useCart();
  const { user, getUserInfo, updateUserInfo } = useAuth();
  const [totalCost, setTotalCost] = useState(getCartCost() || 0);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: EmptyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line
  }, []);

  const handleBuy = () => {
    addToHistory();
    setCart([]);
    user.type === "client"
      ? toast.success("Compra realizada!")
      : toast.success("Adicionado ao estoque!");
    setTotalCost(0);
  };

  const handleAddCost = (price) => {
    setTotalCost(totalCost + price);
  };

  const handleRemoveCost = (price) => {
    setTotalCost(totalCost - price);
  };

  const addToHistory = () => {
    const newProducts = user.products || cart;
    const newShopHistory = [...newProducts, ...cart] || cart;
    updateUserInfo({ products: newShopHistory });
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
              style={{
                cursor: "pointer",
                borderRadius: "10px",
                color: "white",
                fontSize: "1.2rem",
              }}
            >
              {user.type === "client" ? "Comprar" : "Adicionar ao estoque"}
            </Button>
          </S.ButtonContainer>
        </>
      )}
      {cart.length < 1 && (
        <S.ImageContainer>
          <h2>Seu carrinho está vazio!</h2>
          <Lottie options={defaultOptions} height={320} width={320} />
        </S.ImageContainer>
      )}
    </S.CartContainer>
  );
};

export default UserCart;
