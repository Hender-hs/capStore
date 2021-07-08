import { useState }       from "react";
import SalesAndPurchases  from "./SalesAndPurchases";
import UserAndSellerData  from "./UserAndSellerData";

const ProfileData = ({data, products}) => {

  const [ alternateDataTabs, setAlternateDataTabs ] = useState(true);

  const handleClickTabs = (boolean) => setAlternateDataTabs(boolean);

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
        <div onClick={() => handleClickTabs(true)} >
          <p>Dados Cadastrais</p>
        </div>
        <div onClick={() => handleClickTabs(false)} >
          <p>{isClientOrUser()}</p>
        </div>
      </nav>
      <div>
        { 
          alternateDataTabs 
          ? 
          <UserAndSellerData propProfileData={data} />
          :
          <SalesAndPurchases whichHistory={alternateHistoryTitle()} SalesOrPurchases={products} />
        }
      </div>
    </div>
  );
};

export default ProfileData;