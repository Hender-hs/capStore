import { useProducts }  from "../../providers/Products";
import defaultImg       from "../../assets/default.jpg";
import * as S           from "./styles";
import { useState }     from "react";
import { useEffect }    from "react";

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
    <S.EachHardware key={index} >
      <div>
        <p>{el.name}</p>
      </div>
      <div>
        <img src={el.url} alt={el.name} />
        <p>{el.description.slice(0, 55)}...</p>
      </div>
      <div>
        <button onClick={() => removingHardwareToLocalStorage(el)} >Remove</button>
      </div>
    </S.EachHardware>
  );

  const printingSpecificKindOfProducts = (el, index) => (
    <S.EachHardware key={index} >
      <div>
        <p>{el.name}</p>
      </div>
      <div>
        <img src={el.url} alt={el.name} />
        <p>{el.description}</p>
      </div>
      <div>
        <button onClick={() => addingHardwareToLocalStorage(el)} >Adicionar</button>
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
    <S.EachHardware onClick={() => handleClickHardwareKindSelection(el)} >
      <img src={defaultImg} alt={el} />
      <p>{el}</p>
    </S.EachHardware>
  );

  return (
    <S.Container>
      <S.PChardware>
        {PCpartsToChooseArray.map(PrintingPCpartsToChoose)}
      </S.PChardware>
      <div>
        {PCpartsBeingBuild.map(printingSelectedProdcts)}
      </div>
      <S.Modal open={openModal} onClick={() => setOpenModal(false)} >
        <S.ModalContainer open={openModal} >
          {filteredProducts.map(printingSpecificKindOfProducts)}
        </S.ModalContainer>
      </S.Modal>
    </S.Container>
  );
};

export default BuildYourPc;