import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../../services/api";

interface CartProviderProps {
  children: ReactNode;
}
interface Product {
  id?: number;
  name: string;
  title: string;
  description: string;
  image: string;
}

interface CartProviderData {
  cart: Product[];
  setCart: (value: Product[]) => void;
  getProducts: () => void;
  addProduct: (product: Product) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const local = localStorage.getItem("cart");
  const [cart, setCart] = useState<Product[]>(!local ? [] : JSON.parse(local));

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const getProducts = () => {
    api.get("/products").then((res) => console.log(res));
  };

  const addProduct = async (product: Product) => {
    const response = await api.post("/products", product);

    setCart([...cart, response.data]);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, getProducts, addProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
