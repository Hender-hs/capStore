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
