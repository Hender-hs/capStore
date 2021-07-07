import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Product } from "../../types/product";

interface CartProviderProps {
  children: ReactNode;
}

interface CartProviderData {
  cart: Product[];
  setCart: Dispatch<SetStateAction<Product[]>>;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  getCartCost: () => number;
  isInCart: (product: Product) => boolean;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const local = localStorage.getItem("cart");
  const [cart, setCart] = useState<Product[]>(!local ? [] : JSON.parse(local));

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id: number) => {
    const newCart = cart.filter((product) => product.id !== id);

    setCart(newCart);
  };

  const getCartCost = () => {
    return cart.reduce((acc, product) => acc + product.price, 0);
  };

  const isInCart = (product: Product) => {
    // para deixar botão disabled se já tiver produto no cart
    return cart.includes(product);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        getCartCost,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
