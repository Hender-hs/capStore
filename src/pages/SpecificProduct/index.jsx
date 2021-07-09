import { useState } from "react";
import { useEffect } from "react";
import Product from "../../components/Product";
import api from "../../services/api";
const SpecificProduct = () => {
  const [product, setProduct] = useState([]);

  const getProduct = () => {
    const id = Number(localStorage.getItem("@capstone:product_Id") || "");
    api.get("/products").then((response) => {
        const foundProduct = response.data.filter((item) => item.id === id);
        setProduct(foundProduct.pop());
    });
  };

  useEffect(() => {
    getProduct();
  }, []);
  
  return (
    <div>
      <Product
        name={product.name}
        url={product.url}
        price={product.price}
        quantity={product.quantity}
        userType={product.userType}
      />
    </div>
  );
};
export default SpecificProduct;
