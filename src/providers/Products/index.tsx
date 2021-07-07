import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../../services/api";
import { Product } from "../../types/product";

interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsProviderData {
  getProducts: () => void;
  products: Product[];
  filteredProducts: Product[];
  filterByCategory: (category: string) => void;
  filterBySellerId: (sellerId: number) => void;
}

const ProductsContext = createContext<ProductsProviderData>(
  {} as ProductsProviderData
);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    const response = await api.get("/products");
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const filterByCategory = (category: string) => {
    const newList = products.filter((product) => product.category === category);

    setFilteredProducts(newList);
  };

  const filterBySellerId = (sellerId: number) => {
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
