import { useProducts } from "../../providers/Products";
import { useState, useEffect } from "react";
import api from "../../services/api";
import jwt_decode from "jwt-decode";
import * as S from "./styled";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { useCart } from "../../providers/Cart";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [inputValue, setInput] = useState("");
  const [type, setType] = useState("");
  const [id, setId] = useState("");
  const { products, filterBySellerId, filteredProducts } = useProducts();
  const { addToCart } = useCart();

  const history = useHistory();

  const getType = () => {
    const token = localStorage.getItem("@capstore:token");
    const decoded = jwt_decode(token);
    setType(JSON.parse(decoded.sub));

    api
      .get(`/users/${decoded.sub}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setType(response.data.type);
        setId(response.data.sellerId);
      });
  };

  const redirectToSpecificProductPage = (el) => {
    localStorage.setItem("@capstone:product_Id", el.id)
    history.push("/specificProduct")
  }

  useEffect(() => {
    console.log("type", type);
    getType();
    filterBySellerId(id);
  }, []);

  return (
    <S.Container>
      {type !== "seller" && (
        <>
          <input onChange={(e) => setInput(e.target.value)} />
          {inputValue === "" && (
            <>
              <h1>Placa mãe</h1>
              <Slider autoFocus="true">
                {products
                  .filter((item) => item.category === "Placa-mãe")
                  .map((item) => (
                    <div>
                      <S.Card onClick={() => redirectToSpecificProductPage(item)} >
                        <img src={item.url} alt="img de uma peça" />
                        <span>Nome {item.name.slice(0, 20)}</span>
                        <p>R${item.price}</p>
                        <button
                          className="client"
                          onClick={() => addToCart(item)}
                        >
                          Comprar
                        </button>
                      </S.Card>
                    </div>
                  ))}
              </Slider>

              <>
                <h1>Processador</h1>
                <Slider>
                  {products
                    .filter((item) => item.category === "Processador")
                    .map((item) => (
                      <div>
                        <S.Card onClick={() => redirectToSpecificProductPage(item)} >
                          <img src={item.url} alt="img de uma peça" />
                          <span>Nome {item.name.slice(0, 20)}</span>
                          <p>R${item.price}</p>
                          <button
                            className="client"
                            onClick={() => addToCart(item)}
                          >
                            Comprar
                          </button>
                        </S.Card>
                      </div>
                    ))}
                </Slider>
              </>

              <>
                <h1>Monitor Gamer</h1>
                <Slider>
                  {products
                    .filter((item) => item.category === "Monitor Gamer")
                    .map((item) => (
                      <div>
                        <S.Card onClick={() => redirectToSpecificProductPage(item)} >
                          <img src={item.url} alt="img de uma peça" />
                          <span>Nome {item.name.slice(0, 20)}</span>
                          <p>R${item.price}</p>
                          <button
                            className="client"
                            onClick={() => addToCart(item)}
                          >
                            Comprar
                          </button>
                        </S.Card>
                      </div>
                    ))}
                </Slider>
              </>
            </>
          )}
          {inputValue !== "" && (
            <>
              <Slider>
                {products
                  .filter((item) => item.category === inputValue)
                  .map((item) => (
                    <div>
                      <S.Card onClick={() => redirectToSpecificProductPage(item)} >
                        <span>Nome {item.name.slice(0, 20)}</span>
                        <p>R${item.price}</p>
                        <button
                          onClick={() => addToCart(item)}
                          className="client"
                        >
                          Comprar
                        </button>
                      </S.Card>
                    </div>
                  ))}
              </Slider>
            </>
          )}
        </>
      )}
      {type === "seller" && (
        <>
          {
            <Slider>
              {filteredProducts.map((item) => (
                <div>
                  <S.CardS onClick={() => redirectToSpecificProductPage(item)} >
                    <span>Nome {item.name.slice(0, 20)}</span>
                    <p>R${item.price}</p>
                  </S.CardS>
                </div>
              ))}
            </Slider>
          }
          <button>Anunciar</button>
        </>
      )}
    </S.Container>
  );
};

export default Home;
