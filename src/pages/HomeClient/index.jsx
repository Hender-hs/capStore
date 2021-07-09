import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { useProducts } from "../../providers/Products";
import { useState } from "react";
import * as S from "./styled.js";
import Carousel from "nuka-carousel";

const HomeClient = () => {
  const [inputValue, setInput] = useState("");
  const { products } = useProducts();

  return (
    <S.Container>
      <div>Aqui vai fica o menu e o carrinho e a sinalização dele</div>
      <input value={inputValue} onChange={(e) => setInput(e.target.value)} />
      <>
        <Carousel>
          {products
            .filter((item) => item.category === "Monitor Gamer")
            .map((item, index) => (
              <S.Card>
                <span>Nome {item.name.slice(0, 20)}</span>
                <p>{item.price}</p>
                <img src={item.url} alt="img de uma peça" />
                <button>Add</button>
              </S.Card>
            ))}
        </Carousel>

        <Carousel>
          {products
            .filter((item) => item.category === "Monitor Gamer")
            .map((item, index) => (
              <S.Card>
                <span>Nome {item.name.slice(0, 20)}</span>
                <p>{item.price}</p>
                <img src={item.url} />
                <button>Add</button>
              </S.Card>
            ))}
        </Carousel>
      </>

      {/* {inputValue === "" && (
        <>
          <section>
            <h3>Placa Mãe</h3>
            <Slider>
              {products
                .filter((item) => item.category === "Monitor Gamer")
                .map((item, index) => (
                  <S.Card>
                    <span>Nome {item.name.slice(0, 20)}</span>
                    <p>{item.price}</p>
                    <button>Add</button>
                  </S.Card>
                ))}
            </Slider>
          </section>
          <section>
            <h3>Processador</h3>
            <Slider>
              {products
                .filter((item) => item.category === "Monitor Gamer")
                .map((item, index) => (
                  <div key={index}>
                    <span>Nome {item.name.slice(0, 20)}</span>
                    <p>{item.price}</p>
                    <button>Add</button>
                  </div>
                ))}
            </Slider>
          </section>
        </>
      )}
      {inputValue !== "" && (
        <>
          <section>
            <h3>Produto encontrado</h3>
            <Slider>
              {products
                .filter((item) => item.category === "Monitor Gamer")
                .map((item, index) => (
                  <div key={index}>
                    <span>Nome {item.name.slice(0, 20)}</span>
                    <p>{item.price}</p>
                  </div>
                ))}
            </Slider>
          </section>
          <div>Aqui fica o footer</div>
        </>
      )} */}
    </S.Container>
  );
};

export default HomeClient;
