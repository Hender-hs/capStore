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
import { useHistory } from "react-router-dom";


const SpecificProduct = () => {

  const [product, setProduct] = useState([]);
  const { addToCart } = useCart();
  const { user, getUserInfo } = useAuth();
  const history = useHistory();

  const getProduct = () => {
    const id = Number(localStorage.getItem("@capstone:product_Id") || "");
    api.get("/products").then((response) => {
      const foundProduct = response.data.filter((item) => item.id === id).pop();
      setProduct(foundProduct);
    });
  };

  const handleAddToCard = (product) => {
    addToCart(product);
    history.push("/cart");
  }

  useEffect(() => {
    getProduct();
    getUserInfo();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Header />
      <S.Container>
        <S.DivProduct>
          <Product
            name={product.name}
            url={product.url}
            price={product.price}
            quantity={product.quantity}
            userType={user?.type}
          />
          {user?.type === "client" && (
            <S.Button width="100px" onClick={() => handleAddToCard(product)}>
              Adicionar ao carrinho
            </S.Button>
          )}
        </S.DivProduct>
        <div className="description" >
          <h2 className="description-title" >Descrição</h2>
          <p>{product.description}</p>
        </div>
        <Feedbacks evaluation={product.feedback} userType={user?.type} />
      </S.Container>
      <Footer />
    </>
  );
};
export default SpecificProduct;
