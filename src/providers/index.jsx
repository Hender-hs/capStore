import { AuthProvider } from "./Auth";
import { CartProvider } from "./Cart";
import { ProductsProvider } from "./Products";

const Providers = ({ children }) => {
  return (
    <ProductsProvider>
      <AuthProvider>
        <CartProvider>{children}</CartProvider>
      </AuthProvider>
    </ProductsProvider>
  );
};

export default Providers;
