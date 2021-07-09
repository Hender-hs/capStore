import { useState } from "react";
import { useEffect } from "react";
import Product from "../../components/Product";
import api from "../../services/api";
import Feedbacks from "../../components/Feedbacks";
import { useCart } from "../../providers/Cart";
const SpecificProduct = () => {
  const [product, setProduct] = useState([]);
  const { setCart } = useCart();
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
        name={product?.name}
        url={product?.url}
        price={product?.price}
        quantity={product?.quantity}
        userType={product?.userType}
      />
      <button onClick={() => setCart(product)}>Adicionar ao carrinho</button>
      <Feedbacks feedback={product.feedback} userType={product.userType} />
    </div>
  );
};
export default SpecificProduct;
