import formatValue from "../../utils/formatValue";
import DefaultImage from "../../assets/default.jpg";

import * as S from "./styles";
import { useHistory } from "react-router-dom";

const Product = ({ name, url, price, quantity, userType, id }) => {
  const history = useHistory();
  const howManySold = (value) => {
    const newValue = 10 - value;

    if (!newValue) {
      return 0;
    }

    return newValue;
  };
  const sendToPage = () => {
    localStorage.setItem("@capstone:product_Id", id);
    history.push("/specificProduct");
  }
  return (
    <S.Container onClick={sendToPage}>
      <img src={url || DefaultImage} alt={name} />
      <S.Datas>
        <h3>{name}</h3>
        {userType === "seller" ? (
          <S.SellerPrice>
            <label>{formatValue(price)}</label>
            <p>Quantidade vendida: {howManySold(quantity)}</p>
          </S.SellerPrice>
        ) : (
          <S.ClientPrice>
            <p>
              <label>À vista</label>
              {formatValue(price)}
            </p>
            <h6>ou 12x sem juros de {formatValue(price / 12)}</h6>
          </S.ClientPrice>
        )}
      </S.Datas>
    </S.Container>
  );
};

export default Product;
