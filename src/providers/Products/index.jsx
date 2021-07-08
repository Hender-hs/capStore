import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const getProducts = async () => {
    const response = await api.get("/products");
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const filterByCategory = (category) => {
    const newList = products.filter((product) => product.category === category);

    setFilteredProducts(newList);
  };

  const filterBySellerId = (sellerId) => {
    const newList = products.filter((product) => product.sellerId === sellerId);

    setFilteredProducts(newList);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        filteredProducts,
        getProducts,
        filterByCategory,
        filterBySellerId,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
