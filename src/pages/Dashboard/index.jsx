import { useEffect } from "react";
import Header from "../../components/Header";
import MenuMobile from "../../components/MenuMobile";
import { useAuth } from "../../providers/Auth";
import { useProducts } from "../../providers/Products";
const Dashboard = () => {
  const { getUserInfo } = useAuth();
  const { getProducts } = useProducts();

  useEffect(() => {
    getUserInfo();
    getProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <MenuMobile />
      <Header />
    </div>
  );
};

export default Dashboard;
