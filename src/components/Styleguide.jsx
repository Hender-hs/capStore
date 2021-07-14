import { useAuth } from "../providers/Auth";
import { useProducts } from "../providers/Products";
import ProfileData from "./ProfileData";

const Styleguide = () => {
  const { user } = useAuth();
  const { products } = useProducts();

  return (
    <div>
      <ProfileData data={user} products={products} />
    </div>
  );
};

export default Styleguide;
