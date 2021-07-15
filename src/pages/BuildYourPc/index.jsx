import { useProducts } from "../../providers/Products";
import defaultImg from "../../assets/default.jpg";
import * as S from "./styles";
import { useState } from "react";
import { useEffect } from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import formatValue from "../../utils/formatValue";

import MotherBoard from "../../assets/motherboard.jpg";
import Cabinet from "../../assets/cabinet.jpg";
import Cooler from "../../assets/cooler.jpg";
import Headset from "../../assets/headset.jpg";
import Keyboard from "../../assets/keyboard.jpeg";
import Mouse from "../../assets/mouse.jpg";
import Ram from "../../assets/ram.jpg";
import VideoBoard from "../../assets/videoboard.jpg";
import Cpu from "../../assets/cpu.jpeg";
import Font from "../../assets/font.jpeg";
import Ssd from "../../assets/ssd.jpg";
import Mousepad from "../../assets/mousepad.jpg";
import { useCart } from "../../providers/Cart";
import { toast } from "react-toastify";

const BuildYourPc = () => {
  const hardwaresInlocalStorage = JSON.parse(
    localStorage.getItem("@build-your-pc/hardwares")
  );

  const { filterByCategory, filteredProducts } = useProducts();
  const { addToCart, setCart, cart } = useCart();

  const [PCpartsBeingBuild, setPCpartsBeingBuild] = useState(
    hardwaresInlocalStorage || []
  );
  const [openModal, setOpenModal] = useState(false);

  const handleClickHardwareKindSelection = (category) => {
    filterByCategory(category);
    setOpenModal(true);
  };

  const addingHardwareToLocalStorage = (element) => {
    setPCpartsBeingBuild([...PCpartsBeingBuild, element]);
    setOpenModal(false);
  };

  const removingHardwareToLocalStorage = (productToBeRemoved) => {
    const sortedSelectedProducts = PCpartsBeingBuild.filter(
      (el) => el.id !== productToBeRemoved.id
    );
    setPCpartsBeingBuild(sortedSelectedProducts);
  };

  useEffect(() => {
    localStorage.setItem(
      "@build-your-pc/hardwares",
      JSON.stringify(PCpartsBeingBuild)
    );
  }, [PCpartsBeingBuild]);

  const printingSelectedProdcts = (el, index) => (
    <S.EachHardwareSelected key={index}>
      <div className="product-info">
        <img src={el.url} alt={el.name} />
        <div className="product-name">
          <p>{el.name}</p>
          <div className="price-info">
            <p>
              <strong>à vista </strong>
              {formatValue(el.price)}
            </p>
            <p>ou</p>
            <h3>em até 12x de {formatValue(el.price / 12)}</h3>
          </div>
        </div>
      </div>
      <div>
        <Button
          width="300px"
          style={{ fontSize: "16px", color: "white", borderRadius: "10px" }}
          onClick={() => removingHardwareToLocalStorage(el)}
        >
          Remover
        </Button>
      </div>
    </S.EachHardwareSelected>
  );

  const printingSpecificKindOfProducts = (el, index) => (
    <S.EachHardware key={index}>
      <div className="first-child">
        <img src={el.url} alt={el.name} />
        <div className="product-name">
          <p>{el.name}</p>
        </div>
      </div>
      <div className="second-child">
        <p>
          <strong>à vista </strong>
          {formatValue(el.price)}
        </p>
        <p>ou</p>
        <h3>em até 12x de {formatValue(el.price / 12)}</h3>
      </div>
      <div>
        <Button
          width="250px"
          style={{ fontSize: "16px", color: "white", borderRadius: "10px" }}
          onClick={() => addingHardwareToLocalStorage(el)}
        >
          Adicionar
        </Button>
      </div>
    </S.EachHardware>
  );

  const PCpartsToChooseArray = [
    "Placa-mãe",
    "Placa de Vídeo",
    "Processador",
    "Fonte",
    "Cooler",
    "hd/ssd",
    "Memória Ram",
    "Gabinete Gamer",
    "Teclado Gamer",
    "Mouse Gamer",
    "Mousepad Gamer",
    "Headset",
  ];

  const categoryImage = {
    "Placa-mãe": MotherBoard,
    "Placa de Vídeo": VideoBoard,
    Processador: Cpu,
    Fonte: Font,
    Cooler: Cooler,
    "hd/ssd": Ssd,
    "Memória Ram": Ram,
    "Gabinete Gamer": Cabinet,
    "Teclado Gamer": Keyboard,
    "Mouse Gamer": Mouse,
    "Mousepad Gamer": Mousepad,
    Headset: Headset,
  };

  const PrintingPCpartsToChoose = (el) => (
    <S.EachHardwareType onClick={() => handleClickHardwareKindSelection(el)}>
      <img src={categoryImage[el] || defaultImg} alt={el} />
      <p>{el}</p>
    </S.EachHardwareType>
  );

  const handleAddAllToCart = () => {
    const newParts = PCpartsBeingBuild;
    setCart([...cart, ...newParts]);

    setPCpartsBeingBuild([]);
    localStorage.removeItem("@build-your-pc/hardwares");

    toast.success("Produtos adicionados ao carrinho!");
  };

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
            <div>
              <Button
                onClick={handleAddAllToCart}
                disabled={PCpartsBeingBuild.length < 1}
              >
                Adicionar ao carrinho
              </Button>
            </div>
          </S.TitleDiv>
          {PCpartsBeingBuild.map(printingSelectedProdcts)}
        </S.SelectedProducts>
      </S.BodyDiv>
      <S.Modal open={openModal} onClick={() => setOpenModal(false)}>
        <S.ModalContainer open={openModal}>
          {filteredProducts.map(printingSpecificKindOfProducts)}
        </S.ModalContainer>
      </S.Modal>
    </S.Container>
  );
};

export default BuildYourPc;
