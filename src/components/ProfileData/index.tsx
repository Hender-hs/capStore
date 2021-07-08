import { useState }       from "react";
import SalesAndPurchases  from "./SalesAndPurchases";
import UserAndSellerData  from "./UserAndSellerData";

interface Products {
  name: string,
  price: number,
}

interface ProfilesDatas {
  cep: string,
  phone: number,
  email: string,
  location: string,
}

interface ComponentProp {
  data: ProfilesDatas, 
  products: Products[]
}

const ProfileData = ({data, products}: ComponentProp) => {

  const [ alternateDataTabs, setAlternateDataTabs ] = useState<boolean>(true);

  const handleClickTabs = () => setAlternateDataTabs(!alternateDataTabs);

  return (
    <div>
      <nav>
        <div onClick={handleClickTabs} >
          <p>Dados Cadastrais</p>
        </div>
        <div onClick={handleClickTabs} >
          <p>Pedidos / Vendas</p>
        </div>
      </nav>
      <div>
        { 
          alternateDataTabs 
          ? 
          <UserAndSellerData propProfileData={data} />
          :
          <SalesAndPurchases whichHistory='' SalesOrPurchases={products} />
        }
      </div>
    </div>
  );
};

export default ProfileData;