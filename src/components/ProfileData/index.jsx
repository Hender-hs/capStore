import { useState } from "react";
import SalesAndPurchases from "./SalesAndPurchases";
import UserAndSellerData from "./UserAndSellerData";

import * as S from "./styles";

const ProfileData = ({ data, products }) => {
  const [alternateDataTabs, setAlternateDataTabs] = useState(true);

  const isClientOrUser = () => {
    if (data.type === "client") return "Compras";
    return "Produtos";
  };

  const alternateHistoryTitle = () => {
    if (data.type === "client") return "Histórico de compras";
    return "Histórico de vendas";
  };

  return (
    <S.Container>
      <S.Tabs>
        <div onClick={() => setAlternateDataTabs(true)}>
          <p>Dados Cadastrais</p>
        </div>
        <S.Divider />
        <div onClick={() => setAlternateDataTabs(false)}>
          <p>{isClientOrUser()}</p>
        </div>
      </S.Tabs>
      <S.Content>
        {alternateDataTabs ? (
          <UserAndSellerData propProfileData={data} />
        ) : (
          <SalesAndPurchases
            whichHistory={alternateHistoryTitle()}
            ProductsOfSalesOrPurchases={products}
            isSellerToShowTotal={data.type}
          />
        )}
      </S.Content>
    </S.Container>
  );
};

export default ProfileData;
