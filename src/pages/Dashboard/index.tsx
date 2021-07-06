import { useCart } from "../../providers/Cart";

const Dashboard = () => {
  const { products } = useCart();

  return (
    <div>
      {products.map((product) => (
        <p>{product.name}</p>
      ))}
    </div>
  );
};

export default Dashboard;
