import { useProducts } from "../../providers/Products";
import { useState } from "react";
import * as S from "./styled.js";
import Carousel from "nuka-carousel";

const HomeClient = () => {
  const [inputValue, setInput] = useState("");
  const [categoryProdutos, setCategoryProdutos] = useState("Monitor Gamer");
  const { products } = useProducts();

  return (
    <S.Container>
      <div>Aqui vai fica o menu e o carrinho e a sinalização dele</div>
      <input value={inputValue} onChange={(e) => setInput(e.target.value)} />

      <S.ContainerCategory>
        <S.Category
          className=".shrink-border"
          onClick={() => setCategoryProdutos("Placa Mãe")}
        >
          <span>Placas Mãe</span>
        </S.Category>
        <S.Category onClick={() => setCategoryProdutos("Monitor Gamer")}>
          <span>Ram</span>
        </S.Category>
        <S.Category onClick={() => setCategoryProdutos("Placa Mãe")}>
          <span>HD</span>
        </S.Category>
        <S.Category onClick={() => setCategoryProdutos("Placa Mãe")}>
          <span>Promoções</span>
        </S.Category>
      </S.ContainerCategory>

      {inputValue === "" && (
        <>
          <Carousel>
            {products
              .filter((item) => item.category === categoryProdutos)
              .map((item) => (
                <S.Card>
                  <span>Nome {item.name.slice(0, 20)}</span>
                  <p>{item.price}</p>
                  <img src={item.url} alt="img de uma peça" />
                  <button>Add</button>
                </S.Card>
              ))}
          </Carousel>
        </>
      )}
      {inputValue !== "" && (
        <>
          <Carousel>
            {products
              .filter((item) => item.category === inputValue)
              .map((item) => (
                <S.Card>
                  <span>Nome {item.name.slice(0, 20)}</span>
                  <p>{item.price}</p>
                  <img src={item.url} alt="img de uma peça" />
                  <button>Add</button>
                </S.Card>
              ))}
          </Carousel>
        </>
      )}
    </S.Container>
  );
};

export default HomeClient;
