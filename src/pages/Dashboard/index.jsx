import { useProducts } from "../../providers/Products";

const Dashboard = () => {
  const { products } = useProducts();

  return (
    <div>
      {products.map((product) => (
        <p>{product.name}</p>
      ))}
    </div>
  );
};

export default Dashboard;
