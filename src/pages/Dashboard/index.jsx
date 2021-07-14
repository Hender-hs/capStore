import { useEffect } from "react";
import Header from "../../components/Header";
import MenuMobile from "../../components/MenuMobile";
import { useAuth } from "../../providers/Auth";
const Dashboard = () => {
  const { getUserInfo } = useAuth();

  useEffect(() => {
    getUserInfo();
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
