import { useProducts }  from "../../providers/Products";
import defaultImg       from "../../assets/default.jpg";
import { Modal, Fade }  from "@material-ui/core";
import * as S           from "./styles";
import { useState }     from "react";

const BuildYourPc = () => {

  const { filterByCategory, filteredProducts }  = useProducts();
  const [ whichCategory, setWhichCategory ]     = useState();
  const [ openModal, setOpenModal ]             = useState(false);

  const WhichKindOfHardwareSelect = (category) => {
    setWhichCategory(category);
    filterByCategory(category);
  }

  const handleClickHardwareKindSelection = (category) => {
    WhichKindOfHardwareSelect(category);
    setOpenModal(true);
  }

  const addingHardwareToLocalStorage = (element) => {

    const hardwaresInlocalStorage = JSON.parse(localStorage.getItem("@build-your-pc/hardwares"));

    const objectToLocalStorage = hardwaresInlocalStorage || [];

    objectToLocalStorage.push(whichCategory = element);

    localStorage.setItem("@build-your-pc/hardwares", JSON.stringify(objectToLocalStorage));

    setOpenModal(false);
  }

  const printProdcts = (el, index) => (
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

  return (
    <S.Container>
      <S.PChardware>
        <S.EachHardware onClick={() => handleClickHardwareKindSelection("Placa-mãe")} >
          <img src={defaultImg} alt="Placa Mãe" />
          <p>Placa Mãe</p>
        </S.EachHardware>
        <S.EachHardware onClick={() => handleClickHardwareKindSelection("Placa de Vídeo")} >
          <img src={defaultImg} alt="Placa de Vídeo" />
          <p>Placa de Vídeo</p>
        </S.EachHardware>
        <S.EachHardware onClick={() => handleClickHardwareKindSelection("Processador")} >
          <img src={defaultImg} alt="Processador"  />
          <p>Processador</p>
        </S.EachHardware>
        <S.EachHardware onClick={() => handleClickHardwareKindSelection("Fonte")} >
          <img src={defaultImg} alt="Fonte" />
          <p>Fonte</p>
        </S.EachHardware>
        <S.EachHardware onClick={() => handleClickHardwareKindSelection("Cooler")} >
          <img src={defaultImg} alt="Cooler" />
          <p>Cooler</p>
        </S.EachHardware>
        <S.EachHardware onClick={() => handleClickHardwareKindSelection("hd/ssd")} >
          <img src={defaultImg} alt="Armazenamento" />
          <p>Armazenamento</p>
        </S.EachHardware>
        <S.EachHardware onClick={() => handleClickHardwareKindSelection("Memória Ram")} >
          <img src={defaultImg} alt="Memoria RAM" />
          <p>Memoria RAM</p>
        </S.EachHardware>
        <S.EachHardware onClick={() => handleClickHardwareKindSelection("Gabinete Gamer")} >
          <img src={defaultImg} alt="Gabinete Gamer" />
          <p>Gabinete</p>
        </S.EachHardware>
        <S.EachHardware onClick={() => handleClickHardwareKindSelection("Teclado Gamer")} >
          <img src={defaultImg} alt="Teclado Gamer" />
          <p>Teclado</p>
        </S.EachHardware>
        <S.EachHardware onClick={() => handleClickHardwareKindSelection("Mouse Gamer")} >
          <img src={defaultImg} alt="Mouse Gamer" />
          <p>Mouse</p>
        </S.EachHardware>
        <S.EachHardware onClick={() => handleClickHardwareKindSelection("Mousepad Gamer")} >
          <img src={defaultImg} alt="Mousepad Gamer" />
          <p>Mousepad</p>
        </S.EachHardware>
        <S.EachHardware onClick={() => handleClickHardwareKindSelection("Headset")} >
          <img src={defaultImg} alt="Headset" />
          <p>Headset</p>
        </S.EachHardware>
      </S.PChardware>
      <div>
        {}
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} >
        <Fade in={openModal} >
          <S.Container>
            {filteredProducts.map(printProdcts)}
          </S.Container>
        </Fade>
      </Modal>
    </S.Container>
  );
};

export default BuildYourPc;