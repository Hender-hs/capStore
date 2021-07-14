import { useProducts }  from "../../providers/Products";
import defaultImg       from "../../assets/default.jpg";
import * as S           from "./styles";
import { useState }     from "react";
import { useEffect }    from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import formatValue from "../../utils/formatValue";

const BuildYourPc = () => {

  const hardwaresInlocalStorage = JSON.parse(localStorage.getItem("@build-your-pc/hardwares"));

  const { filterByCategory, filteredProducts }          = useProducts();
  const [ PCpartsBeingBuild, setPCpartsBeingBuild ]     = useState(hardwaresInlocalStorage || []);
  const [ openModal, setOpenModal ]                     = useState(false);

  const handleClickHardwareKindSelection = (category) => {
    filterByCategory(category);
    setOpenModal(true);
  }

  const addingHardwareToLocalStorage = (element) => {
    setPCpartsBeingBuild([...PCpartsBeingBuild, element]);
    setOpenModal(false);
  }

  const removingHardwareToLocalStorage = (productToBeRemoved) => {
    const sortedSelectedProducts = PCpartsBeingBuild.filter( (el) => el.id !== productToBeRemoved.id )
    setPCpartsBeingBuild(sortedSelectedProducts);
  } 

  useEffect( () => {
    localStorage.setItem("@build-your-pc/hardwares", JSON.stringify(PCpartsBeingBuild));
  }, [PCpartsBeingBuild]);

  const printingSelectedProdcts = (el, index) => (
    <S.EachHardwareSelected key={index} >
      <div className="product-info" >
        <img src={el.url} alt={el.name} />
        <div className="product-name">
          <p>{el.name}</p>
          <div className="price-info" >
            <p><strong >à vista </strong>{formatValue(el.price)}</p>
            <p>ou</p>
            <h3>em até 12x de {formatValue(el.price / 12)}</h3>
          </div>
        </div>
      </div>
      <div>
        <Button width="300px" style={{fontSize: "16px", color: "white", borderRadius: "10px"}} onClick={() => removingHardwareToLocalStorage(el)} >Remover</Button>
      </div>
    </S.EachHardwareSelected>
  );

  const printingSpecificKindOfProducts = (el, index) => (
    <S.EachHardware key={index} >
      <div className="first-child" >
        <img src={el.url} alt={el.name} />
        <div className="product-name">
          <p>{el.name}</p>
        </div>
      </div>
      <div className="second-child" >
        <p><strong >à vista </strong>{formatValue(el.price)}</p>
        <p>ou</p>
        <h3>em até 12x de {formatValue(el.price / 12)}</h3>
      </div>
      <div>
        <Button width="250px" style={{fontSize: "16px", color: "white", borderRadius: "10px"}} onClick={() => addingHardwareToLocalStorage(el)} >Adicionar</Button>
      </div>
    </S.EachHardware>
  );

  const PCpartsToChooseArray = [
    "Placa-mãe", "Placa de Vídeo", "Processador", 
    "Fonte", "Cooler", "hd/ssd", "Memória Ram", 
    "Gabinete Gamer", "Teclado Gamer", "Mouse Gamer", 
    "Mousepad Gamer", "Headset"
  ];

  const PrintingPCpartsToChoose = (el) => (
    <S.EachHardwareType onClick={() => handleClickHardwareKindSelection(el)} >
      <img src={defaultImg} alt={el} />
      <p>{el}</p>
    </S.EachHardwareType>
  );

  return (
    <S.Container>
      <div>
        <Header color={"black"} />
      </div>
      <S.BodyDiv>
        <S.PChardware>
          {PCpartsToChooseArray.map(PrintingPCpartsToChoose)}
        </S.PChardware>
          <S.SelectedProducts>
            <S.TitleDiv>
                <h1>Monte seu pc</h1>
            </S.TitleDiv>
            {PCpartsBeingBuild.map(printingSelectedProdcts)}
          </S.SelectedProducts>
      </S.BodyDiv>
      <S.Modal open={openModal} onClick={() => setOpenModal(false)} >
        <S.ModalContainer open={openModal} >
          {filteredProducts.map(printingSpecificKindOfProducts)}
        </S.ModalContainer>
      </S.Modal>
    </S.Container>
  );
};

export default BuildYourPc;