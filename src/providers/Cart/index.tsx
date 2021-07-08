import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../../services/api";

interface CartProviderProps {
  children: ReactNode;
}

interface Feedback {
  user: string;
  rating: number;
  comment?: string;
  likes?: number;
}

interface Product {
  id?: number;
  name: string;
  price: number;
  description: string;
  url: string;
  sellerId: number;
  quantity: number;
  feedback: Feedback[];
}

interface CartProviderData {
  cart: Product[];
  setCart: Dispatch<SetStateAction<Product[]>>;
  getProducts: () => void;
  addToCart: (product: Product) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const local = localStorage.getItem("cart");
  const [cart, setCart] = useState<Product[]>(!local ? [] : JSON.parse(local));
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const getProducts = async () => {
    api.get("/products").then((res) => console.log(res));
    const response = await api.get("products");
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, getProducts, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
