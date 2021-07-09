import { useProducts } from "../../providers/Products";
import * as S from "./styles"

const BuildYourPc = () => {

  const { products } = useProducts();

  const printProdcts = ({name, image, description}, index) => (
    <div key={index} >
      <div>
        <p>{name}</p>
      </div>
      <div>
        <img src={image} alt={name} />
        <p>{description}</p>
      </div>
    </div>
  );

  return (
    <S.Container>
      {products.map(printProdcts)}
    </S.Container>
  );
};

export default BuildYourPc;