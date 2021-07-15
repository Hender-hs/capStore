import { useState } from "react";
import { useEffect } from "react";
import Product from "../../components/Product";
import api from "../../services/api";
import Feedbacks from "../../components/Feedbacks";
import { useCart } from "../../providers/Cart";
import Button from "../../components/Button";
import { useAuth } from "../../providers/Auth";
import Header from "../../components/Header";
import * as S from "./styled";
import Footer from "../../components/Footer";
const SpecificProduct = () => {
  const [product, setProduct] = useState([]);
  const { addToCart } = useCart();
  const { user, getUserInfo } = useAuth();
  const getProduct = () => {
    const id = Number(localStorage.getItem("@capstone:product_Id") || "");
    api.get("/products").then((response) => {
      const foundProduct = response.data.filter((item) => item.id === id).pop();
      setProduct(foundProduct);
    });
  };
  console.log(user);

  useEffect(() => {
    getProduct();
    getUserInfo();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Header />
      <S.Container>
        <Product
          name={product.name}
          url={product.url}
          price={product.price}
          quantity={product.quantity}
          userType={user?.type}
        />
        {user?.type === "client" && (
          <Button width="100px" handleClick={() => addToCart(product)}>
            Adicionar ao carrinho
          </Button>
        )}
        <Feedbacks evaluation={product.feedback} userType={user?.type} />
      </S.Container>
      <Footer />
    </>
  );
};
export default SpecificProduct;
