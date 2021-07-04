import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface CartProviderProps {
  children: ReactNode;
}
interface Product {
  id?: number;
  name: string;
  title: string;
  description: string;
  image: string;
  priceFormatted: number;
}

interface CartProviderData {
  cart: Product[];
  setCart: (value: Product[]) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const local = localStorage.getItem("cart");
  const [cart, setCart] = useState<Product[]>(!local ? [] : JSON.parse(local));

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
