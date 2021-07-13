import * as S from "./styles";
// import DefaultImage from "../assets/default.jpg";
import { useCart } from "../../providers/Cart";
import CartProduct from "./CartProduct";

const UserCart = () => {
  const { cart } = useCart();

  return (
    <div>
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
    </div>
  );
};

export default UserCart;
