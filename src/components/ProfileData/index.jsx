import { useState }       from "react";
import SalesAndPurchases  from "./SalesAndPurchases";
import UserAndSellerData  from "./UserAndSellerData";

const ProfileData = ({data, products}) => {

  const [ alternateDataTabs, setAlternateDataTabs ] = useState(true);

  const isClientOrUser = () => {
    if (data.type === "client") return "Compras";
    return "Vendas";
  }

  const alternateHistoryTitle = () => {
    if (data.type === "client") return "Histórico de compras";
    return "Histórico de vendas";
  }

  return (
    <div>
      <nav>
        <div onClick={() => setAlternateDataTabs(true)} >
          <p>Dados Cadastrais</p>
        </div>
        <div onClick={() => setAlternateDataTabs(false)} >
          <p>{isClientOrUser()}</p>
        </div>
      </nav>
      <div>
        { 
          alternateDataTabs 
          ? 
          <UserAndSellerData propProfileData={data} />
          :
          <SalesAndPurchases whichHistory={alternateHistoryTitle()} ProductsOfSalesOrPurchases={products} isSellerToShowTotal={data.type} />
        }
      </div>
    </div>
  );
};

export default ProfileData;