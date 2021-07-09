import { useProducts }  from "../../providers/Products";
import defaultImg       from "../../assets/default.jpg";
import * as S           from "./styles"

const BuildYourPc = () => {

  const { filterByCategory, filteredProducts } = useProducts();

  const printProdcts = ({name, url, description}, index) => (
    <S.EachHardware key={index} >
      <div>
        <p>{name}</p>
      </div>
      <div>
        <img src={url} alt={name} />
        <p>{description}</p>
      </div>
    </S.EachHardware>
  );

  return (
    <S.Container>
      <S.PChardware>
        <S.EachHardware onClick={() => filterByCategory("Placa Mãe")} >
          <img src={defaultImg} alt="Placa Mãe" />
          <p>Placa Mãe</p>
        </S.EachHardware>
        <S.EachHardware onClick={() => filterByCategory("Placa de Vídeo")} >
          <img src={defaultImg} alt="Placa de Vídeo" />
          <p>Placa de Vídeo</p>
        </S.EachHardware>
        <S.EachHardware onClick={() => filterByCategory("Processador")} >
          <img src={defaultImg} alt="Processador"  />
          <p>Processador</p>
        </S.EachHardware>
        <S.EachHardware onClick={() => filterByCategory("Fonte")} >
          <img src={defaultImg} alt="Fonte" />
          <p>Fonte</p>
        </S.EachHardware>
        <S.EachHardware onClick={() => filterByCategory("Cooler")} >
          <img src={defaultImg} alt="Cooler" />
          <p>Cooler</p>
        </S.EachHardware>
        <S.EachHardware onClick={() => filterByCategory("Armazenamento")} >
          <img src={defaultImg} alt="Armazenamento" />
          <p>Armazenamento</p>
        </S.EachHardware>
        <S.EachHardware onClick={() => filterByCategory("Memoria RAM")} >
          <img src={defaultImg} alt="Memoria RAM" />
          <p>Memoria RAM</p>
        </S.EachHardware>
        <S.EachHardware onClick={() => filterByCategory("Gabinete Gamer")} >
          <img src={defaultImg} alt="Gabinete Gamer" />
          <p>Gabinete</p>
        </S.EachHardware>
        <S.EachHardware onClick={() => filterByCategory("Teclado Gamer")} >
          <img src={defaultImg} alt="Teclado Gamer" />
          <p>Teclado</p>
        </S.EachHardware>
        <S.EachHardware onClick={() => filterByCategory("Mouse Gamer")} >
          <img src={defaultImg} alt="Mouse Gamer" />
          <p>Mouse</p>
        </S.EachHardware>
        <S.EachHardware onClick={() => filterByCategory("Mousepad Gamer")} >
          <img src={defaultImg} alt="Mousepad Gamer" />
          <p>Mousepad</p>
        </S.EachHardware>
        <S.EachHardware onClick={() => filterByCategory("Headset")} >
          <img src={defaultImg} alt="Headset" />
          <p>Headset</p>
        </S.EachHardware>
      </S.PChardware>
      <div>
        {filteredProducts.map(printProdcts)}
      </div>
    </S.Container>
  );
};

export default BuildYourPc;