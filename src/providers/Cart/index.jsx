import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const local = JSON.parse(localStorage.getItem("@capstore:cart"));
  const [cart, setCart] = useState(local || []);

  useEffect(() => {
    // eslint-disable-next-line
    localStorage.setItem("@capstore:cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const newProduct = product;
    newProduct.howMany = 1;
    setCart([...cart, newProduct]);
    toast.success("Adicionado ao carrinho!");
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((product) => product.id !== id);

    setCart(newCart);
  };

  const getCartCost = () => {
    return cart.reduce(
      (acc, product) => acc + product.price * (product.howMany || 1),
      0
    );
  };

  const isInCart = (product) => {
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
