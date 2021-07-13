import { useProducts } from "../../providers/Products";
import { useState, useEffect } from "react";
import * as S from "./styled.js";
import Input from "../../components/Input";
import api from "../../services/api";
import jwt_decode from "jwt-decode";
import Button from "../../components/Button";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const Home = () => {
  const [inputValue, setInput] = useState("");
  const [type, setType] = useState("");
  const [id, setId] = useState("");
  const { products, filterBySellerId, filteredProducts } = useProducts();

  const getType = () => {
    const token = localStorage.getItem("token");
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
  const setCart = (item) => {
    localStorage.setItem("cart", JSON.stringify(item));
  };

  useEffect(() => {
    getType();
    filterBySellerId(id);
    console.log(type);
  }, []);

  return (
    <>
      {type === "client" && (
        <S.Container>
          <Input />
          {inputValue === "" && (
            <>
              <h1>Placa mãe</h1>
              <Slider autoFocus="true">
                {products
                  .filter((item) => item.category === "Placa-mãe")
                  .map((item) => (
                    <S.Card>
                      <img src={item.url} alt="img de uma peça" />
                      <span>Nome {item.name.slice(0, 20)}</span>
                      <p>R${item.price}</p>
                      <button className="client" onClick={() => setCart(item)}>
                        Comprar
                      </button>
                    </S.Card>
                  ))}
              </Slider>
            </>
          )}
        </S.Container>
      )}
      {type === "seller" && (
        <S.Container>
          {
            <Slider>
              {filteredProducts.map((item) => (
                <S.CardS>
                  <img src={item.url} alt="img de uma peça" />
                  <span>Nome {item.name.slice(0, 20)}</span>
                  <p>R${item.price}</p>
                  <button onClick={() => setCart(item)} className="client">
                    Comprar
                  </button>
                </S.CardS>
              ))}
            </Slider>
          }
        </S.Container>
      )}
    </>
  );
};

export default Home;
