import { useProducts } from "../../providers/Products";
import { useState } from "react";
import * as S from "./styled.js";
import Carousel from "nuka-carousel";
import Input from "../../components/Input";

const Home = () => {
  const [inputValue, setInput] = useState("");
  const [categoryProdutos, setCategoryProdutos] = useState("Monitor Gamer");
  const [type, setType] = useState("client");
  const { products } = useProducts();

  return (
    <>
      {type === "client" && (
        <S.Container>
          <Input
            value={inputValue}
            onChange={(e) => setInput(e.target.value)}
          />
          {inputValue === "" && (
            <>
              <h1>{categoryProdutos}</h1>
              <Carousel>
                {products
                  .filter((item) => item.category === categoryProdutos)
                  .map((item) => (
                    <S.Card>
                      <img src={item.url} alt="img de uma peça" />
                      <span>Nome {item.name.slice(0, 20)}</span>
                      <p>R${item.price}</p>
                      <button className="client">Comprar</button>
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
                      <p>R${item.price}</p>
                      <button className="client"> Comprar</button>
                    </S.Card>
                  ))}
              </Carousel>
            </>
          )}
        </S.Container>
      )}
      {type === "seller" && (
        <S.Container>
          <Input
            value={inputValue}
            onChange={(e) => setInput(e.target.value)}
          />
          {inputValue === "" && (
            <>
              <h1>Seus Produtos</h1>
              <Carousel>
                {products
                  .filter((item) => item.category === categoryProdutos)
                  .map((item) => (
                    <S.Card>
                      <img src={item.url} alt="img de uma peça" />
                      <span>Nome {item.name.slice(0, 20)}</span>
                      <p>R${item.price}</p>
                    </S.Card>
                  ))}
              </Carousel>
              <button className="seller"> Comprar</button>
            </>
          )}
        </S.Container>
      )}
    </>
  );
};

export default Home;
