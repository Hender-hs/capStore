import { useProducts } from "../../providers/Products";
import { useState } from "react";
import * as S from "./styled.js";
import Carousel from "nuka-carousel";
import Input from "../../components/Input";
const HomeClient = () => {
  const [inputValue, setInput] = useState("");
  const [categoryProdutos, setCategoryProdutos] = useState("Monitor Gamer");
  const { products } = useProducts();

  return (
    <S.Container>
      <div>Aqui vai fica o menu e o carrinho e a sinalização dele</div>
      <Input
        value={inputValue}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Pesquisar"
      />

      <S.ContainerCategory>
        <S.Category
          className=".shrink-border"
          onClick={() => setCategoryProdutos("Placa-mãe")}
        >
          <span>Placas Mãe</span>
        </S.Category>
        <S.Category onClick={() => setCategoryProdutos("Processador")}>
          <span>Ram</span>
        </S.Category>
        <S.Category onClick={() => setCategoryProdutos("hd/ssd")}>
          <span>HD</span>
        </S.Category>
        <S.Category onClick={() => setCategoryProdutos("Fonte")}>
          <span>Fonte</span>
        </S.Category>
      </S.ContainerCategory>

      {inputValue === "" && (
        <>
          <h3>{categoryProdutos}</h3>
          <Carousel>
            {products
              .filter((item) => item.category === categoryProdutos)
              .map((item) => (
                <S.Card>
                  <span>Nome {item.name.slice(0, 20)}</span>
                  <p>{item.price}</p>
                  <img src={item.url} alt="img de uma peça" />
                  <button>Comprar</button>
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
                  <button>Comprar</button>
                </S.Card>
              ))}
          </Carousel>
        </>
      )}
    </S.Container>
  );
};

export default HomeClient;
