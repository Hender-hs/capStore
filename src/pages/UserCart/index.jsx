import * as S from "./styles";
import DefaultImage from "../assets/default.jpg";
import { useCart } from "../../providers/Cart";

const UserCart = () => {
  const { cart } = useCart();

  return (
    <div>
      <S.ProductsContainer>
        {cart.map((product, index) => (
          <S.ProductContent key={index}>
            <S.ProductCol>
              <img src={product.image || DefaultImage} alt={product.name} />
            </S.ProductCol>
            <S.ProductCol></S.ProductCol>
          </S.ProductContent>
        ))}
      </S.ProductsContainer>
    </div>
  );
};

export default UserCart;
