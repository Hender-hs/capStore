import { useEffect } from "react";
import { useAuth } from "../providers/Auth";
import { useProducts } from "../providers/Products";
import ProfileData from "./ProfileData";

const Styleguide = () => {
  const { user, getUserInfo } = useAuth();
  const { products } = useProducts();

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <ProfileData data={user} products={products} />
      <button onClick={getUserInfo}>Teste</button>
    </div>
  );
};

export default Styleguide;
