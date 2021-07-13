import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const local = JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState(local || []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((product) => product.id !== id);

    setCart(newCart);
  };

  const getCartCost = () => {
    return cart.reduce((acc, product) => acc + product.price, 0);
  };

  const isInCart = (product) => {
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
