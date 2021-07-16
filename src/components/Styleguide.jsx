import { useEffect } from "react";
import { useAuth } from "../providers/Auth";
import { useProducts } from "../providers/Products";
import MenuDesktop from "./MenuDesktop";

const Styleguide = () => {
  const { user, getUserInfo } = useAuth();
  const { products } = useProducts();

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <MenuDesktop needInput />
    </div>
  );
};

export default Styleguide;
