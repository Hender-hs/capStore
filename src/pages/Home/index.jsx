import { useProducts } from "../../providers/Products";
import { useState, useEffect } from "react";
import Input from "../../components/Input";
import api from "../../services/api";
import jwt_decode from "jwt-decode";

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
        <div>
          <Input />
          {inputValue === "" && (
            <>
              <h1>Placa mãe</h1>
              <Slider autoFocus="true">
                {products
                  .filter((item) => item.category === "Placa-mãe")
                  .map((item) => (
                    <div>
                      <img src={item.url} alt="img de uma peça" />
                      <span>Nome {item.name.slice(0, 20)}</span>
                      <p>R${item.price}</p>
                      <button className="client" onClick={() => setCart(item)}>
                        Comprar
                      </button>
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
                        <img src={item.url} alt="img de uma peça" />
                        <span>Nome {item.name.slice(0, 20)}</span>
                        <p>R${item.price}</p>
                        <button
                          className="client"
                          onClick={() => setCart(item)}
                        >
                          Comprar
                        </button>
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
                        <img src={item.url} alt="img de uma peça" />
                        <span>Nome {item.name.slice(0, 20)}</span>
                        <p>R${item.price}</p>
                        <button
                          className="client"
                          onClick={() => setCart(item)}
                        >
                          Comprar
                        </button>
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
                      <span>Nome {item.name.slice(0, 20)}</span>
                      <p>R${item.price}</p>
                      <button onClick={() => setCart(item)} className="client">
                        Comprar
                      </button>
                    </div>
                  ))}
              </Slider>
            </>
          )}
        </div>
      )}
      {type === "seller" && (
        <div>
          {
            <Slider>
              {products.map((item) => (
                <div>
                  <span>Nome {item.name.slice(0, 20)}</span>
                  <p>R${item.price}</p>
                  <button onClick={() => setCart(item)} className="client">
                    Comprar
                  </button>
                </div>
              ))}
            </Slider>
          }
        </div>
      )}
    </>
  );
};

export default Home;
