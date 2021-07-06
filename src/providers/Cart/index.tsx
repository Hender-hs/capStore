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
  category: string;
  description: string;
  url: string;
  sellerId: number;
  quantity: number;
  feedback: Feedback[];
}

interface CartProviderData {
  cart: Product[];
  setCart: Dispatch<SetStateAction<Product[]>>;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  getCartCost: () => number;
  isInCart: (product: Product) => boolean;
  getProducts: () => void;
  products: Product[];
  filteredProducts: Product[];
  filterByCategory: (category: string) => void;
  filterBySellerId: (sellerId: number) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const local = localStorage.getItem("cart");
  const [cart, setCart] = useState<Product[]>(!local ? [] : JSON.parse(local));
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

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

  const getProducts = async () => {
    const response = await api.get("/products");
    setProducts(response.data);
  };

  const isInCart = (product: Product) => {
    // para deixar botão disabled se já tiver produto no cart
    return cart.includes(product);
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
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        getCartCost,
        isInCart,
        products,
        getProducts,
        filteredProducts,
        filterByCategory,
        filterBySellerId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
