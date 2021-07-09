import { useState } from "react";
import { useEffect } from "react";
import Product from "../../components/Product";
import api from "../../services/api";
import Feedbacks from "../../components/Feedbacks";
import { useCart } from "../../providers/Cart";
import Button from "../../components/Button";
import { useAuth } from "../../providers/Auth";
const SpecificProduct = () => {
  const [product, setProduct] = useState([]);
  const { setCart } = useCart();
  const { user } = useAuth();
  const getProduct = () => {
    const id = Number(localStorage.getItem("@capstone:product_Id") || "");
    api.get("/products").then((response) => {
      const foundProduct = response.data.filter((item) => item.id === id).pop();
      setProduct(foundProduct);
    });
  };

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {/* Header */}
      <Product
        name={product.name}
        url={product.url}
        price={product.price}
        quantity={product.quantity}
        userType={user?.type}
      />
      {user.type === "client" && (
        <Button handleClick={() => setCart(product)}>
          Adicionar ao carrinho
        </Button>
      )}

      <Feedbacks evaluation={product.feedback} userType={user?.type} />
    </div>
  );
};
export default SpecificProduct;
